'use client'

import {useTranslations} from 'next-intl'
import {SKILL_CATEGORIES} from '../data/skills-data'
import SkillIcon from './ui/SkillIcon'

export default function Skills() {
  const t = useTranslations('skillsPage')
  return (
    <section id="skills" className="content-section scroll-mt-20" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">{t('title')}</h2>
      <div className="space-y-12">
        {SKILL_CATEGORIES.map((category) => (
          <section key={category.titleKey} aria-labelledby={`skill-${category.titleKey}`}>
            <h3 id={`skill-${category.titleKey}`} className="section-subtitle">{t(category.titleKey)}</h3>
            <div className="skill-grid">
              {category.skills.map((skill) => (
                <SkillIcon key={skill.alt} src={skill.icon} Icon={skill.Icon} alt={skill.alt} title={t(skill.subtitleKey)} label={skill.labelKey ? t(skill.labelKey) : skill.label} iconColor={skill.iconColor} imageClassName={skill.imageClassName} variant={skill.variant} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
