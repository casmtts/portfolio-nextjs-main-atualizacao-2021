'use client'

import Image from 'next/image';

import { useTranslations } from 'next-intl';
import acessibilidadeIcon from '../../../public/images/acessibilidade.png';
import ansibleIcon from '../../../public/images/Ansible_logo.svg';
import awsIcon from '../../../public/images/aws.svg';
import bootstrap from '../../../public/images/bootstrap.svg';
import cssIcon from '../../../public/images/css3.svg';
import dockerIcon from '../../../public/images/docker.svg';
import expressIcon from '../../../public/images/express.svg';
import figmaIcon from '../../../public/images/figma.svg';
import firebaseIcon from '../../../public/images/firebase.svg';
import jenkinsIcon from '../../../public/images/free-jenkins-icon-download-in-svg-png-gif-file-formats--brand-company-logo-world-logos-vol-3-pack-icons-282385.webp';
import githubIcon from '../../../public/images/github.svg';
import gitlabIcon from '../../../public/images/gitlab_original_wordmark_logo_icon_146504.webp';
import googleCloudIcon from '../../../public/images/google-cloud.webp';
import herokuIcon from '../../../public/images/heroku.svg';
import hibernateIcon from '../../../public/images/hibernate.svg';
import html5Icon from '../../../public/images/html5.svg';
import javaIcon from '../../../public/images/java.svg';
import javascriptIcon from '../../../public/images/javascript.svg';
import jestIcon from '../../../public/images/jest.svg';
import jUnitIcon from '../../../public/images/JUnit.webp';
import kubernetesIcon from '../../../public/images/kubernetes-logo-1-1.svg';
import linuxIcon from '../../../public/images/linux.png';
import lucidchartIcon from '../../../public/images/lucidchart.webp';
import materialUi from '../../../public/images/material-ui.svg';
import materialDesign from '../../../public/images/materialDesign.svg';
import mavenIcon from '../../../public/images/maven.svg';
import mongodbIcon from '../../../public/images/mongodb.svg';
import mongooseIcon from '../../../public/images/mongoose.png';
import mysqlIcon from '../../../public/images/mysql.svg';
import nestJsIcon from '../../../public/images/nestjs.svg';
import nextjsIcon from '../../../public/images/nextjs-logo.svg';
import nodeIcon from '../../../public/images/node.svg';
import notionIcon from '../../../public/images/notion.svg';
import npmIcon from '../../../public/images/npm.svg';
import photoshopIcon from '../../../public/images/photoshop.png';
import postgresIcon from '../../../public/images/postgres.svg';
import postmanIcon from '../../../public/images/postman.svg';
import prismaIcon from '../../../public/images/prisma.svg';
import prototipacaoIcon from '../../../public/images/prototipacao.png';
import pythonIcon from '../../../public/images/python.png';
import rancherIcon from '../../../public/images/rancher.png';
import reactIcon from '../../../public/images/react-js.svg';
import reactNativeIcon from '../../../public/images/react-native.svg';
import reduxIcon from '../../../public/images/redux.svg';
import restApiIcon from '../../../public/images/restApi.svg';
import sequelizeIcon from '../../../public/images/sequelize.svg';
import sonarQubeIcon from '../../../public/images/sonarqube.svg';
import swaggerIcon from '../../../public/images/swagger.svg';
import tailwindIcon from '../../../public/images/TailwindLogo.svg';
import typeormIcon from '../../../public/images/typeorm.svg';
import typescriptIcon from '../../../public/images/typescript.svg';
import usabilidadeIcon from '../../../public/images/usabilidade.png';
import vercelIcon from '../../../public/images/vercel.webp';
import yarnIcon from '../../../public/images/yarn.webp';

function Skills() {

  const t = useTranslations('skillsPage');

  return (
    <div className='ml-[4rem] xl:mt-5'>

      <h2 className='text-center font-bold text-3xl xl:text-4xl 2xl:text-4xl mb-20 bg-[#00FF80] py-2'>{t('title')}</h2>

      <h2 className='font-bold text-2xl mb-20 text-center bg-[#f0f0f0] py-2'>{t('frontEndTitle')}</h2>

      <div className="mb-10 px-4 lg:px-[5%] xl:px-[7%] 2xl:px-[10%] gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('htmlSubtitle')}
        ><Image src={html5Icon} alt='html5Icon' className='w-[80%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('cssSubtitle')}
        ><Image src={cssIcon} alt='cssIcon' className='w-[60%]' />
        </div>

        <div className='w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('jsSubtitle')}
        ><Image src={javascriptIcon} alt='javascriptIcon' className='w-[80%]' />
        </div>

        <div className='w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('typescriptSubtitle')}
        ><Image src={typescriptIcon} alt='typescriptIcon' className='w-[80%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('reduxSubtitle')}
        ><Image src={reduxIcon} alt='reduxIcon' className='w-[50%]' />
          <h5 className='text-center font-bold text-sm'>Redux</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('reactSubtitle')}
        ><Image src={reactIcon} alt='reactIcon' className='w-[50%]' />
          <h5 className='text-center font-bold text-sm'>React</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('nextjsSubtitle')}
        ><Image src={nextjsIcon} alt='nextjsIcon' className='w-[80%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('tailwindSubtitle')}
        ><Image src={tailwindIcon} alt='tailwindIcon' className='w-[80%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('bootstrapSubtitle')}
        ><Image src={bootstrap} alt='bootstrap' className='w-[60%]' />
          <h5 className='text-center font-bold text-sm'>Bootstrap</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('materialUiSubtitle')}
        ><Image src={materialUi} alt='materialUi' className='w-[60%]' />
          <h5 className='text-center font-bold text-sm'>Material UI</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('materialDesignSubtitle')}
        ><Image src={materialDesign} alt='materialDesign' className='w-[50%]' />
          <h5 className='text-center font-bold text-sm'>Material Design</h5>
        </div>

      </div>

      <h2 className='font-bold text-2xl mt-10 mb-20 text-center bg-[#f0f0f0] py-2'>{t('DatabaseEndTitle')}</h2>

      <div className="mb-10 px-4 lg:px-[5%] xl:px-[7%] 2xl:px-[10%] gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('mysqlSubtitle')}
        ><Image src={mysqlIcon} alt='mysqlIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('postgresSubtitle')}
        ><Image src={postgresIcon} alt='postgresIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('mongoSubtitle')}
        ><Image src={mongodbIcon} alt='mongodbIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('typeormSubtitle')}
        ><Image src={typeormIcon} alt='typeormIcon' className='w-[50%]' />
          <h5 className='text-center font-bold text-sm'>Type ORM</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('prismaSubtitle')}
        ><Image src={prismaIcon} alt='prismaIcon' className='w-[80%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('sequelizeSubtitle')}
        ><Image src={sequelizeIcon} alt='sequelizeIcon' className='w-[80%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('mongooseSubtitle')}
        ><Image src={mongooseIcon} alt='mongooseIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('firebaseSubtitle')}
        ><Image src={firebaseIcon} alt='firebaseIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('hibernateSubtitle')}
        ><Image src={hibernateIcon} alt='hibernateIcon' className='w-[100%]' />
        </div>

      </div>

      <h2 className='font-bold text-2xl mt-10 mb-20 text-center bg-[#f0f0f0] py-2'>{t('backEndtitle')}</h2>

      <div className="mb-10 px-4 lg:px-[5%] xl:px-[7%] 2xl:px-[10%] gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('apiSubtitle')}
        ><Image src={restApiIcon} alt='restApiIcon' className='w-[50%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('nodeSubtitle')}
        ><Image src={nodeIcon} alt='nodeIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('expressSubtitle')}
        ><Image src={expressIcon} alt='expressIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('nestjsSubtitle')}
        ><Image src={nestJsIcon} alt='nestJsIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('javaSubtitle')}
        ><Image src={javaIcon} alt='javaIcon' className='w-[50%]' />
        </div>

      </div>

      <h2 className='font-bold text-2xl mt-10 mb-20 text-center bg-[#f0f0f0] py-2'>{t('mobileDevTitle')}</h2>

      <div className="mb-10 px-4 lg:px-[5%] xl:px-[7%] 2xl:px-[10%] gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('reactNativeSubtitle')}
        ><Image src={reactNativeIcon} alt='reactNativeIcon' className='w-[100%]' />
        </div>

      </div>

      <h2 className='font-bold text-2xl mt-10 mb-20 text-center bg-[#f0f0f0] py-2'>{t('relatedTechTitle')}</h2>

      <div className="pb-[10rem] px-4 lg:px-[5%] xl:px-[7%] 2xl:px-[10%] gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('acessibilitySubtitle')}
        ><Image src={prototipacaoIcon} alt='prototipacaoIcon' className='w-[50%]' />
          <h5 className='text-center text-sm'>{t('protoTitle')}</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('usabilitySubtitle')}
        ><Image src={usabilidadeIcon} alt='usabilidadeIcon' className='w-[50%]' />
          <h5 className='text-center text-sm'>{t('usabilityTitle')}</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('acessibilitySubtitle')}
        ><Image src={acessibilidadeIcon} alt='acessibilidadeIcon' className='w-[50%]' />
          <h5 className='text-center text-sm'>{t('acessibilityTitle')}</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('figmaSubtitle')}
        ><Image src={figmaIcon} alt='figmaIcon' className='w-[50%]' />
          <h5 className='text-center text-sm'>Figma</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('githubSubtitle')}
        ><Image src={githubIcon} alt='githubIcon' className='w-[50%]' />
          <h5 className='text-center text-sm'>Github</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('photoshopSubtitle')}
        ><Image src={photoshopIcon} alt='photoshopIcon' className='w-[50%]' />
          <h5 className='text-center text-sm'>Photoshop</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('linuxSubtitle')}
        ><Image src={linuxIcon} alt='linuxIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('notionSubtitle')}
        ><Image src={notionIcon} alt='notionIcon' className='w-[50%]' />
          <h5 className='text-center text-sm'>Notion</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('lucidchartSubtitle')}>
          <Image src={lucidchartIcon} alt='lucidchartIcon' className='w-[100%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('npmSubtitle')}>
          <Image src={npmIcon} alt='npmIcon' className='w-[80%]' />
        </div>

        <div className='w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer bg-[#147bac] flex flex-col items-center justify-center rounded-lg'
          title={t('yarnSubtitle')}>
          <Image src={yarnIcon} alt='yarnIcon' className='w-[70%]' />
          <h5 className='text-center text-white text-sm'>Yarn</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('jestSubtitle')}>
          <Image src={jestIcon} alt='jestIcon' className='w-[50%]' />
          <h5 className='text-center text-sm'>Jest</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('googleSubtitle')}>
          <Image src={googleCloudIcon} alt='googleCloudIcon' className='w-[80%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('awsSubtitle')}>
          <Image src={awsIcon} alt='awsIcon' className='w-[50%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('vercelSubtitle')}>
          <Image src={vercelIcon} alt='vercelIcon' className='w-[90%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('herokuSubtitle')}>
          <Image src={herokuIcon} alt='herokuIcon' className='w-[90%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('dockerSubtitle')}>
          <Image src={dockerIcon} alt='dockerIcon' className='w-[90%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('postmanSubtitle')}>
          <Image src={postmanIcon} alt='postmanIcon' className='w-[90%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('jUnitSubtitle')}>
          <Image src={jUnitIcon} alt='jUnitIcon' className='w-[90%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('mavenSubtitle')}>
          <Image src={mavenIcon} alt='mavenIcon' className='w-[90%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('swaggerSubtitle')}>
          <Image src={swaggerIcon} alt='swaggerIcon' className='w-[60%]' />
          <h5 className='text-center text-sm'>Swagger</h5>
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('pythonSubtitle')}>
          <Image src={pythonIcon} alt='pythonIcon' className='w-[60%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('ansibleSubtitle')}>
          <Image src={ansibleIcon} alt='ansibleIcon' className='w-[60%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('gitlabSubtitle')}>
          <Image src={gitlabIcon} alt='gitlabIcon' className='w-[60%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('sonarQubeSubtitle')}>
          <Image src={sonarQubeIcon} alt='sonarQubeIcon' className='w-[60%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('jenkinsSubtitle')}>
          <Image src={jenkinsIcon} alt='jenkinsIcon' className='w-[60%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('kubernetesSubtitle')}>
          <Image src={kubernetesIcon} alt='kubernetesIcon' className='w-[60%]' />
        </div>

        <div className='border-2 w-full aspect-square max-w-[10rem] mx-auto hover:scale-110 cursor-pointer flex flex-col items-center justify-center'
          title={t('rancherSubtitle')}>
          <Image src={rancherIcon} alt='rancherIcon' className='w-[60%]' />
        </div>

      </div>

    </div>

  )
}

export default Skills