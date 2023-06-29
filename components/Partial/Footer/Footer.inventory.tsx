import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  SocialIcon1,
  SocialIcon2,
  TwitterIcon,
} from '@/components'

export const ListItem = [
  {
    label: 'Giới thiệu',
    childs: [
      {
        label: 'Về chúng tôi',
        url: '/',
      },
      {
        label: 'Điều kiện và điều khoản',
        url: '/',
      },
      {
        label: 'Chính sách bảo mật',
        url: '/',
      },
      {
        label: 'Câu hỏi thường gặp',
        url: '/',
      },
      {
        label: 'Cảm nhận khách hàng',
        url: '/',
      },
      {
        label: 'Hỗ trợ',
        url: '/',
      },
    ],
  },
  {
    label: 'LOẠI DU THUYỀN',
    childs: [
      {
        label: 'Du thuyền 5 sao',
        url: '/',
      },
      {
        label: 'Du thuyền mới nhất',
        url: '/',
      },
      {
        label: 'Combo du thuyền',
        url: '/',
      },
      {
        label: 'Câu hỏi thường gặp',
        url: '/',
      },
      {
        label: 'Câu hỏi thường gặp',
        url: '/',
      },
      {
        label: 'Blog ',
        url: '/',
      },
    ],
  },
  {
    label: 'ĐIỂM ĐẾN',
    childs: [
      {
        label: 'Vịnh Hạ Long',
        url: '/',
      },
      {
        label: 'Vịnh Lan Hạ',
        url: '/',
      },
      {
        label: 'Vịnh Bái Tử Long',
        url: '/',
      },
      {
        label: 'Đảo Cát Bà',
        url: '/',
      },
    ],
  },
]

export const SocialIcons = [
  {
    name: 'Twitter',
    link: '/',
    comps: <TwitterIcon />,
  },
  {
    name: 'LinkedIn',
    link: '/',
    comps: <LinkedInIcon />,
  },
  {
    name: 'facebook',
    link: '/',
    comps: <FacebookIcon />,
  },
  {
    name: 'Github',
    link: '/',
    comps: <GithubIcon />,
  },
  {
    name: 'Social1',
    link: '/',
    comps: <SocialIcon1 />,
  },
  {
    name: 'Social2',
    link: '/',
    comps: <SocialIcon2 />,
  },
]
