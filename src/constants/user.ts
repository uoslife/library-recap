import { UserInfoType } from '@uoslife/webview';

export const defaultUser = {
  id: 0,
  nickname: '시대인',
  name: '시대생',
  email: '',
  identity: {
    id: '0',
    type: '학사',
    status: '학부생',
    idNumber: '0000000000',
    university: '경영학부',
    department: '',
    major: '경영학부',
  },
  isVerified: true,
} as UserInfoType;
