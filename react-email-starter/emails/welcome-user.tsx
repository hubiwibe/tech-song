import { Body, Button, Container, Head, Heading, Html, Link, Tailwind, Text } from '@react-email/components';

export default function WelcomeUser() {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Heading>TechSong 회원가입을 환영합니다!</Heading>
            <Text>
              테크송 가입 완료! 눈의 피로는 줄이고, 공부는 늘리고 <br />
              운동할 때도 OK! 듣기로 기술면접 준비하는 법!
            </Text>
            <Button
              className="box-border w-full rounded-[8px] bg-emerald-400 px-[12px] py-[12px] text-center font-semibold text-white"
              href="https://techsong.xyz"
            >
              들으러 가기 🎧
            </Button>
            <Text>
              문의사항이나 건의사항은 아래 이메일로 부탁드립니다.
              <br />
              <Link href="mailto:info.techsong@gmail.com">info.techsong@gmail.com</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
