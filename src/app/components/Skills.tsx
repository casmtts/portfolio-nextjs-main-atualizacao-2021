'use client'

import { useTranslations } from 'next-intl'
import { SKILL_CATEGORIES } from '@/app/data/skills-data'
import { SECTION_IDS } from '@/app/constants/sections'
import Section from './layout/Section'
import SectionTitle from './layout/SectionTitle'
import SkillIcon from './ui/SkillIcon'

function Skills() {
  const t = useTranslations('skillsPage')

  return (
    <Section id={SECTION_IDS.skills}>
      <SectionTitle>{t('title')}</SectionTitle>

      <div className="mx-auto flex max-w-content flex-col gap-12 lg:gap-16">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.titleKey}>
            <SectionTitle variant="secondary">{t(category.titleKey)}</SectionTitle>

            <div className="skill-grid mx-auto justify-items-center">
              {category.skills.map((skill) => (
                <SkillIcon
                  key={skill.alt}
                  src={skill.icon}
                  alt={skill.alt}
                  title={t(skill.subtitleKey)}
                  label={skill.labelKey ? t(skill.labelKey) : skill.label}
                  imageClassName={skill.imageClassName}
                  variant={skill.variant}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
