import { Flex, Typography } from 'antd';

const FooterStatistics = ({
  text,
  value,
}: {
  text: string;
  value: number | string;
}) => (
  <Flex align="center" gap={10}>
    <Typography.Text>{text}</Typography.Text>
    <Typography.Text>{value}</Typography.Text>
  </Flex>
);

export default FooterStatistics;
