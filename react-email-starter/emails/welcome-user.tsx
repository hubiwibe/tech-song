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
              회원가입이 완료되었습니다. <br />
              아래 버튼을 클릭하여 로그인해주세요.
            </Text>
            <Button
              className="box-border w-full rounded-[8px] bg-emerald-400 px-[12px] py-[12px] text-center font-semibold text-white"
              href="https://techsong.xyz"
            >
              TechSong 로그인
            </Button>
          </Container>
        </Body>
        <footer>
          <Text>
            문의사항이나 건의사항은 아래 이메일로 부탁드립니다.
            <br />
            <Link href="mailto:info.techsong@gmail.com">info.techsong@gmail.com</Link>
          </Text>
        </footer>
      </Tailwind>
    </Html>
  );
}
