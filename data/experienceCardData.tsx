import type { StaticImageData } from 'next/image'

import {
  AWSLogo,
  EthersJSLogo,
  FirebaseLogo,
  JavaLogo,
  JavaScriptLogo,
  NextJSLogo,
  NodeJSLogo,
  OpenSeaLogo,
  PythonLogo,
  ReactLogo,
  ReactNativeLogo,
  SolanaLogo,
  SpringLogo,
  TypeScriptLogo
} from '../assets'

export type ExperienceData = {
  jobTitle: string
  company: string
  stack: StaticImageData[]
  startTime: string
  endTime: string
  summaryPoints: (string | JSX.Element)[]
}

export const experienceCardData: ExperienceData[] = [
  {
    jobTitle: 'Front End Engineer',
    company: 'Boop Industries Inc',
    stack: [TypeScriptLogo, ReactNativeLogo, FirebaseLogo, SolanaLogo],
    startTime: 'October 2023',
    endTime: 'Present',
    summaryPoints: [
      'Founding engineer of Web3 payments startup focused on international remittances.',
      'Built core product using React Native and Firebase while implementing fiat on-ramp, KYC, and P2P transfers.',
      'Worked directly with vendors to integrate their solution into mobile product.',
    ]
  },
  {
    jobTitle: 'Front End Engineer',
    company: 'Lunar Labs LLC',
    stack: [TypeScriptLogo, ReactLogo, NextJSLogo, EthersJSLogo],
    startTime: 'May 2023',
    endTime: 'Oct 2023',
    summaryPoints: [
      <span>
        Contracted for the construction of <a style={{ color: '#007acc', }} href='https://moonwell.fi' target='_blank' rel='noopener noreferrer'>Moonwell.fi</a> front end.
      </span>,
      'Created component library to handle Web3 specific user journeys and format on-chain data.',
      'Contributed to overall component architecture.',
    ]
  },
  {
    jobTitle: 'Front End Engineer',
    company: 'Right Click Save Ventures LLC',
    stack: [TypeScriptLogo, ReactLogo, NextJSLogo, PythonLogo, OpenSeaLogo],
    startTime: 'July 2022',
    endTime: 'May 2023',
    summaryPoints: [
      'Founding UI Developer for Web3 Investment Company.',
      'Built early stage institutional grade investment tooling for Web3 digital asset fund.',
      'Responsible for rapid UX design with JavaScript, React and Next.js.'
    ]
  },
  {
    jobTitle: 'Software Engineer',
    company: 'Fidelity Investments',
    stack: [JavaScriptLogo, NodeJSLogo, JavaLogo, SpringLogo, AWSLogo],
    startTime: 'January 2020',
    endTime: 'May 2023',
    summaryPoints: [
      'DevOps Automation Engineer migrating legacy Java code using AWS and Node.js.',
      'Trained junior staff on team processes, tooling and best practices.'
    ]
  },
  {
    jobTitle: 'Front-End Intern',
    company: 'Sensible United LLC',
    stack: [JavaScriptLogo, ReactLogo, ReactNativeLogo],
    startTime: 'August 2018',
    endTime: 'December 2019',
    summaryPoints: [
      'Apprenticed as React Native intern under founding member of small fintech startup.',
      'Worked on UX design team, contributing several screen mocks to production with basic implementation in React Native.'
    ]
  }
]