import { PRODUCT_ROUTE } from '@/utils/routeUtils';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  CardProps,
  Flex,
  Table,
  TableProps,
  Tooltip,
  Typography,
} from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { ColumnType } from 'antd/es/table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterColumns from '../FilterColumns';

type CTableProps = {
  title?: string;
  styleCard?: CardProps['styles'];
} & TableProps;

export default function CTable({
  title,
  styleCard,
  columns,
  ...rest
}: CTableProps) {
  const navigate = useNavigate();
  const [filterColumns, setFilterColumns] = useState<ColumnType<AnyObject>[]>(
    columns ?? [],
  );
  const handleUpdateColumns = (newColumns: ColumnType<AnyObject>[]) => {
    setFilterColumns(newColumns);
  };

  return (
    <Card
      styles={{
        body: {
          overflowX: 'auto',
        },
        ...styleCard,
      }}
    >
      <Flex
        justify="space-between"
        align="center"
        style={{
          marginBottom: 15,
        }}
      >
        <Typography.Title level={5} style={{ marginTop: 0 }}>
          {title ?? 'Danh sách'}
        </Typography.Title>
        <Flex gap={10} align="center">
          <Button
            type="primary"
            onClick={() => navigate(PRODUCT_ROUTE.CREATE)}
            icon={<PlusOutlined />}
          >
            Thêm mới
          </Button>
          <Tooltip title="Làm mới">
            <Button type="default" icon={<ReloadOutlined />} />
          </Tooltip>
          <FilterColumns
            defaultColumns={columns ?? []}
            columns={filterColumns}
            onUpdate={handleUpdateColumns}
          />
        </Flex>
      </Flex>
      <Table {...rest} columns={filterColumns} />
    </Card>
  );
}
