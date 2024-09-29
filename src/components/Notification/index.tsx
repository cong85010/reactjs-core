import { Flex, List } from 'antd';

export const Notification = () => {
  return (
    <List style={{ width: 300 }}>
      <List.Item>
        <Flex flex={1} justify="space-between" align="center">
          <span>You have 1 new message</span>
          <span>24h ago</span>
        </Flex>
      </List.Item>
      <List.Item>
        <Flex flex={1} justify="space-between" align="center">
          <span>You have 5 new notifications</span>
          <span>2 days ago</span>
        </Flex>
      </List.Item>
      <List.Item>
        <Flex flex={1} justify="space-between" align="center">
          <span>You have 3 pending tasks</span>
          <span>3 weeks ago</span>
        </Flex>
      </List.Item>
      <List.Item>
        <Flex flex={1} justify="space-between" align="center">
          <span>You have 7 unread emails</span>
          <span>2 months ago</span>
        </Flex>
      </List.Item>
    </List>
  );
};
