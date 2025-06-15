import { useEffect } from 'react';
import WelcomeUser from 'react-email-starter/emails/welcome-user';
import { useNavigate } from 'react-router';
import { Resend } from 'resend';

const client = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const loader = async () => {
  const { data, error } = await client.emails.send({
    from: 'TechSong <info@mail.techsong.xyz>',
    to: 'hubiwibe@gmail.com',
    subject: '환영합니다🎉 이제 눈은 편안하게, 귀로 공부해요 🎧',
    react: <WelcomeUser />,
  });

  return { data, error };
};

export default function WelcomePage({ loaderData }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  const { error } = loaderData;

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mx-auto flex flex-col items-center justify-center min-h-[200px] px-6 py-8 bg-white rounded-md shadow-md text-center max-w-md">
      {error ? (
        <>
          <p className="text-red-600 font-semibold mb-2">에러가 발생하였습니다.</p>
          <p className="text-sm text-gray-700">{error.message}</p>
        </>
      ) : (
        <p className="text-green-600 font-semibold mb-2">회원가입이 완료되었습니다.</p>
      )}
      <p className="mt-6 text-gray-500 text-sm">잠시 후 메인 페이지로 이동합니다.</p>
    </div>
  );
}
