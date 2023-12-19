import mockIcon from "@/assets/icons/mockIcon.svg";
import defaultIcon from "@/assets/icons/default-profile.svg";

const profileData = {
  id: 0,
  email: "hello@naver.com",
  nickname: "배유철",
  profileImageUrl: mockIcon,
  createdAt: "2023-12-18T12:40:07.131Z",
  updatedAt: "2023-12-18T12:40:07.131Z",
};

const memberData = {
  members: [
    {
      id: 0,
      userId: 0,
      email: "string",
      nickname: "배유철",
      profileImageUrl: defaultIcon,
      createdAt: "2023-12-18T14:57:36.664Z",
      updatedAt: "2023-12-18T14:57:36.664Z",
      isOwner: true,
    },
    {
      id: 1,
      userId: 1,
      email: "string",
      nickname: "김나은",
      profileImageUrl: defaultIcon,
      createdAt: "2023-12-18T14:57:36.664Z",
      updatedAt: "2023-12-18T14:57:36.664Z",
      isOwner: false,
    },
    {
      id: 2,
      userId: 2,
      email: "string",
      nickname: "주소희",
      profileImageUrl: defaultIcon,
      createdAt: "2023-12-18T14:57:36.664Z",
      updatedAt: "2023-12-18T14:57:36.664Z",
      isOwner: false,
    },
    {
      id: 3,
      userId: 3,
      email: "string",
      nickname: "손지은",
      profileImageUrl: defaultIcon,
      createdAt: "2023-12-18T14:57:36.664Z",
      updatedAt: "2023-12-18T14:57:36.664Z",
      isOwner: false,
    },
    {
      id: 4,
      userId: 4,
      email: "string",
      nickname: "신혜윤",
      profileImageUrl: defaultIcon,
      createdAt: "2023-12-18T14:57:36.664Z",
      updatedAt: "2023-12-18T14:57:36.664Z",
      isOwner: false,
    },
    {
      id: 5,
      userId: 5,
      email: "string",
      nickname: "이슬",
      profileImageUrl: defaultIcon,
      createdAt: "2023-12-18T14:57:36.664Z",
      updatedAt: "2023-12-18T14:57:36.664Z",
      isOwner: false,
    },
  ],
  totalCount: 6,
};

const dashboardData = {
  id: 0,
  title: "비브리지",
  color: "string",
  createdAt: "2023-12-18T16:54:55.261Z",
  updatedAt: "2023-12-18T16:54:55.261Z",
  createdByMe: true,
  userId: 0,
};

export { profileData, memberData, dashboardData };