import { Flex, Typography } from 'antd';
import { CaretDownFilled, CaretUpFilled } from '@ant-design/icons';

const PercentText = ({
  name,
  value,
  isUp = false,
}: {
  name: string;
  value: number;
  isUp?: boolean;
}) => {
  return (
    <Flex gap={5} wrap="nowrap">
      <Typography.Text style={{ whiteSpace: 'nowrap' }}>
        {name}:
      </Typography.Text>{' '}
      {value}%
      {isUp ? (
        <CaretUpFilled style={{ fontSize: 20, color: 'green' }} />
      ) : (
        <CaretDownFilled style={{ fontSize: 20, color: 'red' }} />
      )}
    </Flex>
  );
};

export default PercentText;
