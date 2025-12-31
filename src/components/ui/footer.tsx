import { Container } from "../layout/container";
import { Typography } from "./typography";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-50">
      <Container>
        <Typography className="text-center font-bold">
          Copyright &copy; 2023 Christy Jel Yoga
        </Typography>
      </Container>
    </footer>
  );
};
export { Footer };
