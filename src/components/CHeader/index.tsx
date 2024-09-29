import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Image,
  Popover,
  Space,
  Typography,
} from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';
import logo from '@/assets/default/logo.png';
import { SIDE_BAR_WIDTH } from '@/utils/constant';
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Notification } from '../Notification';

const SHeader = styled(Header)`
  position: fixed;
  left: 0;
  height: 70px;
  padding: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  background-color: #ffffff9f;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
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
              placement="bottomRight"
              content={<Notification />}
              title="Thông báo"
              trigger="click"
            >
              <Button
                type="text"
                icon={<BellOutlined style={{ fontSize: 20 }} />}
              />
            </Popover>

            <Dropdown
              menu={{ items: menusUser }}
              placement={'bottomRight'}
              arrow
              trigger={['click']}
            >
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
