import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Image,
  List,
  Popover,
  Space,
  Typography,
} from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';
import logo from '@/assets/default/logo.png';
import { SIDE_BAR_WIDTH } from '@/utils/constant';
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

const SHeader = styled(Header)`
  position: fixed;
  left: 0;
  height: 70px;
  padding: 0;
  background: #ffffff;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
`;

const menusUser = [
  {
    key: 'user',
    icon: <UserOutlined />,
    label: 'User Profile',
    children: [
      { key: 'profile', label: 'Profile' },
      { key: 'settings', label: 'Settings' },
      { key: 'logout', label: 'Logout' },
    ],
  },
  {
    key: 'setting',
    icon: <SettingOutlined />,
    label: 'Settings',
    children: [
      { key: 'notifications', label: 'Notifications' },
      { key: 'help', label: 'Help & Support' },
    ],
  },
];
const Notification = () => {
  return (
    <List style={{ width: 300 }}>
      <List.Item>
        <Flex justify="space-between" align="center">
          <span>You have 1 new message</span>
          <span>24h ago</span>
        </Flex>
      </List.Item>
      <List.Item>
        <Flex justify="space-between" align="center">
          <span>You have 5 new notifications</span>
          <span>2 days ago</span>
        </Flex>
      </List.Item>
      <List.Item>
        <Flex justify="space-between" align="center">
          <span>You have 3 pending tasks</span>
          <span>3 weeks ago</span>
        </Flex>
      </List.Item>
      <List.Item>
        <Flex justify="space-between" align="center">
          <span>You have 7 unread emails</span>
          <span>2 months ago</span>
        </Flex>
      </List.Item>
    </List>
  );
};

export default function CHeader() {
  return (
    <>
      <Header style={{ padding: 0, backgroundColor: 'transparent' }} />
      <SHeader>
        <Flex justify="space-between" align="center">
          <Flex
            justify="center"
            align="center"
            style={{
              width: SIDE_BAR_WIDTH,
            }}
          >
            <Image width={100} height={70} src={logo} preview={false} />
          </Flex>
          <Flex
            justify="end"
            gap={20}
            align="center"
            style={{ paddingRight: 24 }}
          >
            <Popover
              content={<Notification />}
              title="Thông báo"
              trigger="click"
            >
              <Button
                type="text"
                icon={<BellOutlined style={{ fontSize: 20 }} />}
              />
            </Popover>

            <Dropdown menu={{ items: menusUser }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar icon={<UserOutlined />} />
                  <Typography.Text>User 1</Typography.Text>
                </Space>
              </a>
            </Dropdown>
          </Flex>
        </Flex>
      </SHeader>
    </>
  );
}
