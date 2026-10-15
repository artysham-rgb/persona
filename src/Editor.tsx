import { useState } from 'react'
import { Eye, UserRound, Link, BriefcaseBusiness } from 'lucide-react'
import './Editor.css'

export default function Editor() {
  const [name, setName] = useState('Alex Morgan')
  const [profession, setProfession] = useState('Designer & Creator')
  const [description, setDescription] = useState(
    'Создаю красивые вещи и превращаю идеи в реальные проекты.',
  )
  const [email, setEmail] = useState('hello@example.com')
  const [color, setColor] = useState('#a78bfa')

  return (
    <main className="editor-page">
      <header className="editor-header">
        <a className="editor-logo" href="/">
          persona<span>.</span>
        </a>

        <span className="editor-status">EDITOR</span>
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
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Твоё имя"
            />
          </label>

          <label className="editor-label">
            <span>
              <BriefcaseBusiness size={17} /> Профессия
            </span>
            <input
              value={profession}
              onChange={(event) => setProfession(event.target.value)}
              placeholder="Например, дизайнер"
            />
          </label>

          <label className="editor-label">
            <span>О себе</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Расскажи о себе..."
              rows={4}
            />
          </label>

          <label className="editor-label">
            <span>
              <Link size={17} /> Электронная почта
            </span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <div className="editor-label">
            <span>Цвет оформления</span>

            <div className="color-options">
              {['#a78bfa', '#7dd3fc', '#86efac', '#fda4af', '#fcd34d'].map(
                (item) => (
                  <button
                    key={item}
                    type="button"
                    className={`color-option ${color === item ? 'selected' : ''}`}
                    style={{ backgroundColor: item }}
                    aria-label={`Выбрать цвет ${item}`}
                    aria-pressed={color === item}
                    onClick={() => setColor(item)}
                  />
                ),
              )}
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

          <article className="identity-card" style={{ '--accent': color } as React.CSSProperties}>
            <div className="identity-avatar" aria-hidden="true">
              {name.trim().charAt(0).toUpperCase() || '?'}
            </div>

            <span className="identity-tag">PERSONAL PROFILE</span>

            <h2>{name || 'Твоё имя'}</h2>

            <p className="identity-profession">
              {profession || 'Твоя профессия'}
            </p>

            <div className="identity-divider" />

            <p className="identity-description">
              {description || 'Здесь появится твой рассказ о себе.'}
            </p>

            {email && (
              <a className="identity-contact" href={`mailto:${email}`}>
                Связаться со мной ↗
              </a>
            )}

            <span className="identity-footer">MADE WITH PERSONA</span>
          </article>

          <p className="preview-hint">
            Изменяй данные слева — визитка обновляется автоматически.
          </p>
        </section>
      </div>
    </main>
  )
}