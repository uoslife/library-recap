import { UserInfoType } from '@uoslife/webview';

export const defaultUser = {
  id: 0,
  name: '시대생',
  nickname: '시대인',
  birthday: '',
  phone: '000-0000-0000',
  avatarUrl: '',
  isVerified: true,
  degree: '',
  enrollmentStatus: '',
  studentId: '0000000000',
  departmentName: '경영학부',
  collegeName: '경영대학',
} satisfies UserInfoType;
