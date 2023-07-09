import React from 'react';
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} MichaelSoro. All Rights Reserved.`,
  author: {
    name: 'Michael Soro',
    accounts: [
      {
        url: 'https://github.com/MaikolSoro',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/@maikol_soro',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://dev.to/',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: 'https://linkedin.com/in/maikol-soro-3789281b5/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
     
      {
        url: 'mailto:maikolsoro.z1998@gmail.com',
        label: 'Mail Soro',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
