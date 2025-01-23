import {
  Card,
  Divider,
  Flex,
  Statistic,
  StatisticProps,
  Typography,
} from 'antd';

const formatter: StatisticProps['formatter'] = (value: string | number) => (
  <Typography.Text style={{ fontSize: 30, fontWeight: 500 }}>
    {value}
  </Typography.Text>
);

type CardStatisticProps = {
  title: string;
  value: number | string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

const CardStatistic = ({
  title,
  value,
  prefix,
  suffix,
  footer,
  children,
}: CardStatisticProps) => {
  return (
    <Card
      styles={{
        body: {
          paddingBottom: 10,
        },
      }}
    >
      <Statistic
        title={title}
        value={value}
        prefix={prefix}
        formatter={formatter}
        suffix={suffix}
      />
      <Flex style={{ height: 70 }} align="end">
        {children}
      </Flex>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />
      {footer}
    </Card>
  );
};

export default CardStatistic;
