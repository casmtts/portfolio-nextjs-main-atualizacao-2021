import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'
import {
  SiApachekafka,
  SiAnthropic,
  SiCypress,
  SiDatadog,
  SiExpo,
  SiGithubactions,
  SiGitlab,
  SiGooglegemini,
  SiGrafana,
  SiGraphql,
  SiPrometheus,
  SiRabbitmq,
  SiReactquery,
  SiRedis,
  SiRender,
  SiSocketdotio,
  SiSpringboot,
  SiTestinglibrary,
} from 'react-icons/si'
import { RiOpenaiFill } from 'react-icons/ri'
import { TbBrain, TbMasksTheater, TbPlugConnected, TbRoute } from 'react-icons/tb'

import acessibilidadeIcon from '../../../public/images/acessibilidade.png'
import ansibleIcon from '../../../public/images/Ansible_logo.svg'
import awsIcon from '../../../public/images/aws.svg'
import bootstrap from '../../../public/images/bootstrap.svg'
import cssIcon from '../../../public/images/css3.svg'
import dockerIcon from '../../../public/images/docker.svg'
import expressIcon from '../../../public/images/express.svg'
import figmaIcon from '../../../public/images/figma.svg'
import firebaseIcon from '../../../public/images/firebase.svg'
import jenkinsIcon from '../../../public/images/free-jenkins-icon-download-in-svg-png-gif-file-formats--brand-company-logo-world-logos-vol-3-pack-icons-282385.webp'
import githubIcon from '../../../public/images/github.svg'
import gitlabIcon from '../../../public/images/gitlab_original_wordmark_logo_icon_146504.webp'
import googleCloudIcon from '../../../public/images/google-cloud.webp'
import herokuIcon from '../../../public/images/heroku.svg'
import hibernateIcon from '../../../public/images/hibernate.svg'
import html5Icon from '../../../public/images/html5.svg'
import javaIcon from '../../../public/images/java.svg'
import javascriptIcon from '../../../public/images/javascript.svg'
import jestIcon from '../../../public/images/jest.svg'
import jUnitIcon from '../../../public/images/JUnit.webp'
import kubernetesIcon from '../../../public/images/kubernetes-logo-1-1.svg'
import linuxIcon from '../../../public/images/linux.png'
import lucidchartIcon from '../../../public/images/lucidchart.webp'
import materialUi from '../../../public/images/material-ui.svg'
import materialDesign from '../../../public/images/materialDesign.svg'
import mavenIcon from '../../../public/images/maven.svg'
import mongodbIcon from '../../../public/images/mongodb.svg'
import mongooseIcon from '../../../public/images/mongoose.png'
import mysqlIcon from '../../../public/images/mysql.svg'
import nestJsIcon from '../../../public/images/nestjs.svg'
import nextjsIcon from '../../../public/images/nextjs-logo.svg'
import nodeIcon from '../../../public/images/node.svg'
import notionIcon from '../../../public/images/notion.svg'
import npmIcon from '../../../public/images/npm.svg'
import photoshopIcon from '../../../public/images/photoshop.png'
import postgresIcon from '../../../public/images/postgres.svg'
import postmanIcon from '../../../public/images/postman.svg'
import prismaIcon from '../../../public/images/prisma.svg'
import prototipacaoIcon from '../../../public/images/prototipacao.png'
import pythonIcon from '../../../public/images/python.png'
import rancherIcon from '../../../public/images/rancher.png'
import reactIcon from '../../../public/images/react-js.svg'
import reactNativeIcon from '../../../public/images/react-native.svg'
import reduxIcon from '../../../public/images/redux.svg'
import restApiIcon from '../../../public/images/restApi.svg'
import sequelizeIcon from '../../../public/images/sequelize.svg'
import sonarQubeIcon from '../../../public/images/sonarqube.svg'
import swaggerIcon from '../../../public/images/swagger.svg'
import tailwindIcon from '../../../public/images/TailwindLogo.svg'
import typeormIcon from '../../../public/images/typeorm.svg'
import typescriptIcon from '../../../public/images/typescript.svg'
import usabilidadeIcon from '../../../public/images/usabilidade.png'
import vercelIcon from '../../../public/images/vercel.webp'
import yarnIcon from '../../../public/images/yarn.webp'

export type SkillItem = {
  icon?: StaticImageData
  Icon?: IconType
  alt: string
  subtitleKey: string
  label?: string
  labelKey?: string
  iconColor?: string
  imageClassName?: string
  variant?: 'bordered' | 'plain' | 'filled'
}

export type SkillCategory = {
  titleKey: string
  skills: SkillItem[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    titleKey: 'frontEndTitle',
    skills: [
      { icon: html5Icon, alt: 'HTML5', subtitleKey: 'htmlSubtitle', imageClassName: 'w-[80%] mx-auto pt-3' },
      { icon: cssIcon, alt: 'CSS3', subtitleKey: 'cssSubtitle', imageClassName: 'w-[60%] mx-auto pt-4' },
      { icon: javascriptIcon, alt: 'JavaScript', subtitleKey: 'jsSubtitle', variant: 'plain', imageClassName: 'w-full mx-auto' },
      { icon: typescriptIcon, alt: 'TypeScript', subtitleKey: 'typescriptSubtitle', variant: 'plain', imageClassName: 'w-full mx-auto' },
      { icon: reduxIcon, alt: 'Redux', subtitleKey: 'reduxSubtitle', label: 'Redux', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: reactIcon, alt: 'React', subtitleKey: 'reactSubtitle', label: 'React', imageClassName: 'w-[50%] mx-auto pt-7' },
      { icon: nextjsIcon, alt: 'Next.js', subtitleKey: 'nextjsSubtitle', imageClassName: 'w-[80%] mx-auto pt-8' },
      { icon: tailwindIcon, alt: 'Tailwind CSS', subtitleKey: 'tailwindSubtitle', imageClassName: 'w-[80%] mx-auto pt-8' },
      { icon: bootstrap, alt: 'Bootstrap', subtitleKey: 'bootstrapSubtitle', label: 'Bootstrap', imageClassName: 'w-[60%] mx-auto pt-5' },
      { icon: materialUi, alt: 'Material UI', subtitleKey: 'materialUiSubtitle', label: 'Material UI', imageClassName: 'w-[60%] mx-auto pt-5' },
      { icon: materialDesign, alt: 'Material Design', subtitleKey: 'materialDesignSubtitle', label: 'Material Design', imageClassName: 'w-[50%] mx-auto pt-2' },
      { Icon: TbBrain, alt: 'Zustand', subtitleKey: 'zustandSubtitle', label: 'Zustand', iconColor: '#443E38' },
      { Icon: TbBrain, alt: 'Context API', subtitleKey: 'contextApiSubtitle', label: 'Context API', iconColor: '#61DAFB' },
      { Icon: SiReactquery, alt: 'React Query', subtitleKey: 'reactQuerySubtitle', label: 'React Query', iconColor: '#FF4154' },
    ],
  },
  {
    titleKey: 'DatabaseEndTitle',
    skills: [
      { icon: mysqlIcon, alt: 'MySQL', subtitleKey: 'mysqlSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: postgresIcon, alt: 'PostgreSQL', subtitleKey: 'postgresSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: mongodbIcon, alt: 'MongoDB', subtitleKey: 'mongoSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: typeormIcon, alt: 'TypeORM', subtitleKey: 'typeormSubtitle', label: 'Type ORM', imageClassName: 'w-[50%] mx-auto pt-7' },
      { icon: prismaIcon, alt: 'Prisma', subtitleKey: 'prismaSubtitle', imageClassName: 'w-[80%] mx-auto pt-10' },
      { icon: sequelizeIcon, alt: 'Sequelize', subtitleKey: 'sequelizeSubtitle', imageClassName: 'w-[80%] mx-auto pt-10' },
      { icon: mongooseIcon, alt: 'Mongoose', subtitleKey: 'mongooseSubtitle', imageClassName: 'w-full mx-auto pt-7' },
      { icon: firebaseIcon, alt: 'Firebase', subtitleKey: 'firebaseSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: hibernateIcon, alt: 'Hibernate', subtitleKey: 'hibernateSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { Icon: SiRedis, alt: 'Redis', subtitleKey: 'redisSubtitle', label: 'Redis', iconColor: '#DC382D' },
    ],
  },
  {
    titleKey: 'backEndtitle',
    skills: [
      { icon: restApiIcon, alt: 'REST API', subtitleKey: 'apiSubtitle', imageClassName: 'w-[50%] mx-auto pt-8' },
      { icon: nodeIcon, alt: 'Node.js', subtitleKey: 'nodeSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: expressIcon, alt: 'Express', subtitleKey: 'expressSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: nestJsIcon, alt: 'NestJS', subtitleKey: 'nestjsSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: javaIcon, alt: 'Java', subtitleKey: 'javaSubtitle', imageClassName: 'w-[50%] mx-auto' },
      { Icon: SiSpringboot, alt: 'Spring Boot', subtitleKey: 'springBootSubtitle', label: 'Spring Boot', iconColor: '#6DB33F' },
      { Icon: TbPlugConnected, alt: 'WebSockets', subtitleKey: 'webSocketsSubtitle', label: 'WebSockets', iconColor: '#7C3AED' },
      { Icon: SiSocketdotio, alt: 'Socket.IO', subtitleKey: 'socketIoSubtitle', label: 'Socket.IO', iconColor: '#010101' },
      { Icon: SiGraphql, alt: 'GraphQL', subtitleKey: 'graphQlSubtitle', label: 'GraphQL', iconColor: '#E10098' },
    ],
  },
  {
    titleKey: 'mobileDevTitle',
    skills: [
      { icon: reactNativeIcon, alt: 'React Native', subtitleKey: 'reactNativeSubtitle', imageClassName: 'w-full mx-auto' },
      { Icon: SiExpo, alt: 'Expo', subtitleKey: 'expoSubtitle', label: 'Expo', iconColor: '#000020' },
      { Icon: TbRoute, alt: 'React Navigation', subtitleKey: 'reactNavigationSubtitle', label: 'React Navigation', iconColor: '#61DAFB' },
    ],
  },
  {
    titleKey: 'relatedTechTitle',
    skills: [
      { icon: prototipacaoIcon, alt: 'Prototyping', subtitleKey: 'protoSubtitle', labelKey: 'protoTitle', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: usabilidadeIcon, alt: 'Usability', subtitleKey: 'usabilitySubtitle', labelKey: 'usabilityTitle', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: acessibilidadeIcon, alt: 'Accessibility', subtitleKey: 'acessibilitySubtitle', labelKey: 'acessibilityTitle', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: figmaIcon, alt: 'Figma', subtitleKey: 'figmaSubtitle', label: 'Figma', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: githubIcon, alt: 'GitHub', subtitleKey: 'githubSubtitle', label: 'Github', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: photoshopIcon, alt: 'Photoshop', subtitleKey: 'photoshopSubtitle', label: 'Photoshop', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: linuxIcon, alt: 'Linux', subtitleKey: 'linuxSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: notionIcon, alt: 'Notion', subtitleKey: 'notionSubtitle', label: 'Notion', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: lucidchartIcon, alt: 'Lucidchart', subtitleKey: 'lucidchartSubtitle', imageClassName: 'w-full mx-auto pt-8' },
      { icon: npmIcon, alt: 'npm', subtitleKey: 'npmSubtitle', imageClassName: 'w-[80%] mx-auto pt-8' },
      { icon: yarnIcon, alt: 'Yarn', subtitleKey: 'yarnSubtitle', label: 'Yarn', variant: 'filled', imageClassName: 'w-[70%] mx-auto pt-5' },
      { icon: jestIcon, alt: 'Jest', subtitleKey: 'jestSubtitle', label: 'Jest', imageClassName: 'w-[50%] mx-auto pt-5' },
      { icon: googleCloudIcon, alt: 'Google Cloud', subtitleKey: 'googleSubtitle', imageClassName: 'w-[80%] mx-auto pt-8' },
      { icon: awsIcon, alt: 'AWS', subtitleKey: 'awsSubtitle', imageClassName: 'w-[50%] mx-auto pt-8' },
      { icon: vercelIcon, alt: 'Vercel', subtitleKey: 'vercelSubtitle', imageClassName: 'w-[90%] mx-auto pt-8' },
      { icon: herokuIcon, alt: 'Heroku', subtitleKey: 'herokuSubtitle', imageClassName: 'w-[90%] mx-auto pt-6' },
      { icon: dockerIcon, alt: 'Docker', subtitleKey: 'dockerSubtitle', imageClassName: 'w-[90%] mx-auto pt-5' },
      { icon: postmanIcon, alt: 'Postman', subtitleKey: 'postmanSubtitle', imageClassName: 'w-[90%] mx-auto pt-6' },
      { icon: jUnitIcon, alt: 'JUnit', subtitleKey: 'jUnitSubtitle', imageClassName: 'w-[90%] mx-auto pt-6' },
      { icon: mavenIcon, alt: 'Maven', subtitleKey: 'mavenSubtitle', imageClassName: 'w-[90%] mx-auto pt-2' },
      { icon: swaggerIcon, alt: 'Swagger', subtitleKey: 'swaggerSubtitle', label: 'Swagger', imageClassName: 'w-[60%] mx-auto pt-5' },
      { icon: pythonIcon, alt: 'Python', subtitleKey: 'pythonSubtitle', imageClassName: 'w-[60%] mx-auto pt-8' },
      { icon: ansibleIcon, alt: 'Ansible', subtitleKey: 'ansibleSubtitle', imageClassName: 'w-[60%] mx-auto pt-2' },
      { icon: gitlabIcon, alt: 'GitLab', subtitleKey: 'gitlabSubtitle', imageClassName: 'w-[60%] mx-auto pt-2' },
      { icon: sonarQubeIcon, alt: 'SonarQube', subtitleKey: 'sonarQubeSubtitle', imageClassName: 'w-[60%] mx-auto pt-4' },
      { icon: jenkinsIcon, alt: 'Jenkins', subtitleKey: 'jenkinsSubtitle', imageClassName: 'w-[60%] mx-auto pt-4' },
      { icon: kubernetesIcon, alt: 'Kubernetes', subtitleKey: 'kubernetesSubtitle', imageClassName: 'w-[60%] mx-auto pt-4' },
      { icon: rancherIcon, alt: 'Rancher', subtitleKey: 'rancherSubtitle', imageClassName: 'w-[60%] mx-auto pt-6' },
      { Icon: RiOpenaiFill, alt: 'OpenAI API', subtitleKey: 'openaiApiSubtitle', label: 'OpenAI API', iconColor: '#10A37F' },
      { Icon: SiGooglegemini, alt: 'Gemini', subtitleKey: 'geminiSubtitle', label: 'Gemini', iconColor: '#4285F4' },
      { Icon: SiAnthropic, alt: 'Claude', subtitleKey: 'claudeSubtitle', label: 'Claude', iconColor: '#D97757' },
      { Icon: SiApachekafka, alt: 'Apache Kafka', subtitleKey: 'kafkaSubtitle', label: 'Apache Kafka', iconColor: '#231F20' },
      { Icon: SiRabbitmq, alt: 'RabbitMQ', subtitleKey: 'rabbitMqSubtitle', label: 'RabbitMQ', iconColor: '#FF6600' },
      { Icon: SiGithubactions, alt: 'GitHub Actions', subtitleKey: 'githubActionsSubtitle', label: 'GitHub Actions', iconColor: '#2088FF' },
      { Icon: SiGitlab, alt: 'GitLab CI', subtitleKey: 'gitlabCiSubtitle', label: 'GitLab CI', iconColor: '#FC6D26' },
      { Icon: SiCypress, alt: 'Cypress', subtitleKey: 'cypressSubtitle', label: 'Cypress', iconColor: '#17202C' },
      { Icon: TbMasksTheater, alt: 'Playwright', subtitleKey: 'playwrightSubtitle', label: 'Playwright', iconColor: '#2EAD33' },
      { Icon: SiTestinglibrary, alt: 'React Testing Library', subtitleKey: 'testingLibrarySubtitle', label: 'React Testing Library', iconColor: '#E33332' },
      { Icon: SiDatadog, alt: 'Datadog', subtitleKey: 'datadogSubtitle', label: 'Datadog', iconColor: '#632CA6' },
      { Icon: SiPrometheus, alt: 'Prometheus', subtitleKey: 'prometheusSubtitle', label: 'Prometheus', iconColor: '#E6522C' },
      { Icon: SiGrafana, alt: 'Grafana', subtitleKey: 'grafanaSubtitle', label: 'Grafana', iconColor: '#F46800' },
      { Icon: SiRender, alt: 'Render', subtitleKey: 'renderSubtitle', label: 'Render', iconColor: '#46E3B7' },
    ],
  },
]
