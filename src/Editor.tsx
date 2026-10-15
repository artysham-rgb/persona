import { useEffect, useState, type CSSProperties } from 'react'
import { Eye, UserRound, Link, BriefcaseBusiness, Check } from 'lucide-react'
import './Editor.css'

const colors = ['#a78bfa', '#7dd3fc', '#86efac', '#fda4af', '#fcd34d']
const STORAGE_KEY = 'persona-profile'

type Profile = {
  name: string
  profession: string
  description: string
  email: string
  color: string
}

const defaultProfile: Profile = {
  name: 'Alex Morgan',
  profession: 'Designer & Creator',
  description: 'Создаю красивые вещи и превращаю идеи в реальные проекты.',
  email: 'hello@example.com',
  color: colors[0],
}

function loadProfile(): Profile {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (saved) {
      const parsed = JSON.parse(saved) as Partial<Profile>

      return {
        name: typeof parsed.name === 'string' ? parsed.name : defaultProfile.name,
        profession:
          typeof parsed.profession === 'string'
            ? parsed.profession
            : defaultProfile.profession,
        description:
          typeof parsed.description === 'string'
            ? parsed.description
            : defaultProfile.description,
        email:
          typeof parsed.email === 'string' ? parsed.email : defaultProfile.email,
        color:
          typeof parsed.color === 'string' && colors.includes(parsed.color)
            ? parsed.color
            : defaultProfile.color,
      }
    }
  } catch {
    // Если сохранённые данные повреждены, используем профиль по умолчанию.
  }

  return defaultProfile
}

export default function Editor() {
  const [profile, setProfile] = useState<Profile>(loadProfile)
  const [saved, setSaved] = useState(true)

  useEffect(() => {
    setSaved(false)

    const timer = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
        setSaved(true)
      } catch {
        setSaved(false)
      }
    }, 400)

    return () => window.clearTimeout(timer)
  }, [profile])

  function updateProfile<K extends keyof Profile>(
    key: K,
    value: Profile[K],
  ) {
    setProfile((current) => ({ ...current, [key]: value }))
  }

  return (
    <main className="editor-page">
      <header className="editor-header">
        <a className="editor-logo" href="./">
          persona<span>.</span>
        </a>

        <span className="editor-status">
          {saved ? (
            <>
              <Check size={13} /> Сохранено
            </>
          ) : (
            'Сохраняем...'
          )}
        </span>
      </header>

      <div className="editor-layout">
        <section className="editor-panel">
          <div className="editor-heading">
            <span className="editor-kicker">YOUR IDENTITY</span>
            <h1>Создай свою визитку</h1>
            <p>Расскажи миру немного о себе.</p>
          </div>

          <label className="editor-label">
            <span>
              <UserRound size={17} /> Имя
            </span>
            <input
              value={profile.name}
              onChange={(event) => updateProfile('name', event.target.value)}
              placeholder="Твоё имя"
              maxLength={80}
            />
          </label>

          <label className="editor-label">
            <span>
              <BriefcaseBusiness size={17} /> Профессия
            </span>
            <input
              value={profile.profession}
              onChange={(event) =>
                updateProfile('profession', event.target.value)
              }
              placeholder="Например, дизайнер"
              maxLength={100}
            />
          </label>

          <label className="editor-label">
            <span>О себе</span>
            <textarea
              value={profile.description}
              onChange={(event) =>
                updateProfile('description', event.target.value)
              }
              placeholder="Расскажи о себе..."
              rows={4}
              maxLength={600}
            />
          </label>

          <label className="editor-label">
            <span>
              <Link size={17} /> Электронная почта
            </span>
            <input
              type="email"
              value={profile.email}
              onChange={(event) => updateProfile('email', event.target.value)}
              placeholder="you@example.com"
              maxLength={254}
            />
          </label>

          <div className="editor-label">
            <span>Цвет оформления</span>

            <div className="color-options">
              {colors.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`color-option ${profile.color === item ? 'selected' : ''}`}
                  style={{ backgroundColor: item }}
                  aria-label={`Выбрать цвет ${item}`}
                  aria-pressed={profile.color === item}
                  onClick={() => updateProfile('color', item)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="preview-panel">
          <div className="preview-heading">
            <span>
              <Eye size={17} /> Предпросмотр
            </span>
            <span className="live-badge">LIVE</span>
          </div>

          <article
            className="identity-card"
            style={{ '--accent': profile.color } as CSSProperties}
          >
            <div className="identity-avatar" aria-hidden="true">
              {profile.name.trim().charAt(0).toUpperCase() || '?'}
            </div>

            <span className="identity-tag">PERSONAL PROFILE</span>
            <h2>{profile.name || 'Твоё имя'}</h2>

            <p className="identity-profession">
              {profile.profession || 'Твоя профессия'}
            </p>

            <div className="identity-divider" />

            <p className="identity-description">
              {profile.description || 'Здесь появится твой рассказ о себе.'}
            </p>

            {profile.email.trim() && (
              <a
                className="identity-contact"
                href={`mailto:${profile.email.trim()}`}
              >
                Связаться со мной ↗
              </a>
            )}

            <span className="identity-footer">MADE WITH PERSONA</span>
          </article>

          <p className="preview-hint">
            Изменения сохраняются на этом устройстве автоматически.
        </p>
        </section>
      </div>
    </main>
  )
}