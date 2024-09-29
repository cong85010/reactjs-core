import { Button, Flex, Popover, Tooltip } from 'antd';
import { useCallback, useMemo } from 'react';

import { ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ColumnType } from 'antd/es/table';
import { ColumnsType } from 'antd/es/table/interface';
import SortableList, { SortableItemProps } from '../SortableList';

const ListColumn = ({
  list,
  onUpdate,
}: {
  list: ColumnType[] | undefined;
  onUpdate: (e: ColumnType[]) => void;
}) => {
  const handleChange = (e: CheckboxChangeEvent, col: ColumnType) => {
    console.log('====================================');
    console.log(col);
    console.log('====================================');

    e.stopPropagation();
    const newColumns = list?.map((column) => ({
      ...column,
      hidden:
        col.dataIndex === column.dataIndex ? !e.target.checked : column.hidden,
    }));

    onUpdate(newColumns ?? []);
  };

  const handleUpdate = (newColumns: ColumnsType) => {
    onUpdate(newColumns ?? []);
  };

  const formatList = list?.map((item) => ({
    id: item.dataIndex,
    title: item.title,
    dataIndex: item.dataIndex,
    hidden: item.hidden,
  }));

  return (
    <SortableList
      items={formatList as SortableItemProps[]}
      onUpdate={handleUpdate}
      renderItem={(item) => (
        <Checkbox
          checked={!item.hidden}
          onChange={(e) => handleChange(e, item)}
        >
          {item.title as string}
        </Checkbox>
      )}
    />
  );
};

export default function FilterColumns({
  defaultColumns,
  columns,
  onUpdate,
}: {
  defaultColumns: ColumnType[];
  columns?: ColumnType[];
  onUpdate: (columns: ColumnType[]) => void;
}) {
  const isCheckedAll = useMemo(() => {
    return columns?.every((column) => !column.hidden);
  }, [columns]);

  console.log('====================================');
  console.log(isCheckedAll);
  console.log('====================================');

  const handleCheckAll = useCallback(
    (e: CheckboxChangeEvent) => {
      const newColumns = columns?.map((column) => ({
        ...column,
        hidden: !e.target.checked,
      }));

      onUpdate(newColumns ?? []);
    },
    [columns, onUpdate],
  );

  const handleUpdate = (newColumns: ColumnType[]) => {
    onUpdate(newColumns);
  };

  const handleReset = useCallback(() => {
    const newColumns = defaultColumns?.map((column) => ({
      ...column,
      hidden: !!column.hidden,
    }));

    onUpdate(newColumns ?? []);
  }, [defaultColumns, onUpdate]);

  return (
    <Popover
      trigger="click"
      placement="bottomRight"
      content={<ListColumn list={columns} onUpdate={handleUpdate} />}
      title={
        <Flex justify="space-between">
          <Checkbox checked={isCheckedAll} onChange={handleCheckAll}>
            Tất cả
          </Checkbox>
          <Tooltip title="Khôi phục">
            <Button
              type="text"
              onClick={handleReset}
              icon={<ReloadOutlined />}
              size="small"
            />
          </Tooltip>
        </Flex>
      }
    >
      <Tooltip title="Thiết lập">
        <Button icon={<SettingOutlined />} />
      </Tooltip>
    </Popover>
  );
}
