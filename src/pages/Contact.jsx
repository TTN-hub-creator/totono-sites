import { useRef, useState } from 'react'
import { CONTACT_API_URL } from '../config/links'

const TYPE_OPTIONS = [
  '見学のお申し込み',
  '入居・ご利用のご相談',
  '採用について',
  '取材・提携について',
  'その他',
]

const FACILITY_OPTIONS = [
  'Totono Nagi',
  'Totono Nest Shimada',
  'Totono Nest Yaizu',
  'Totono Nest Fujieda',
  'つむぎの家',
  'Totono Kanon',
  '未定・グループ全体について',
]

const INITIAL = {
  name: '',
  kana: '',
  tel: '',
  email: '',
  type: '',
  facility: '',
  message: '',
  consent: false,
  company_url: '', // honeypot
}

const VALIDATORS = {
  name: (v) => (v.trim() ? '' : 'お名前をご入力ください。'),
  kana: (v) =>
    /^[ァ-ヶー\u3000\s]+$/.test(v.trim()) && v.trim()
      ? ''
      : 'フリガナを全角カタカナでご入力ください。',
  tel: (v) =>
    /^[0-9０-９+＋\-－()（）\s]{10,}$/.test(v.trim())
      ? ''
      : '電話番号を半角数字(ハイフン任意)でご入力ください。',
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
      ? ''
      : 'メールアドレスの形式が正しくありません。',
  type: (v) => (v ? '' : 'お問い合わせ種別を選択してください。'),
  facility: (v) => (v ? '' : '希望施設を選択してください。'),
  message: (v) => (v.trim() ? '' : 'お問い合わせ内容をご入力ください。'),
  consent: (v) => (v ? '' : '送信には個人情報の取り扱いへの同意が必要です。'),
}

const inputClass = (hasError) =>
  [
    'w-full rounded-2xl border bg-white px-4 py-3.5 text-base text-[#2f332f]',
    'placeholder:text-[#b9b2a2] transition',
    'focus:outline-none focus:ring-2 focus:ring-[#d8c6a3]/50',
    hasError
      ? 'border-[#b3543e] focus:border-[#b3543e]'
      : 'border-[#e8e2d5] focus:border-[#d8c6a3]',
  ].join(' ')

function Field({ label, error, children, hint }) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium tracking-wide text-[#2f332f]">
        {label}
        <span className="rounded-full bg-[#d8c6a3] px-2 py-0.5 text-[10px] font-medium tracking-widest text-[#2f332f]">
          必須
        </span>
      </label>
      {hint && <p className="mb-2 text-xs leading-6 text-[#8a8576]">{hint}</p>}
      {children}
      {error && (
        <p className="mt-2 text-xs leading-6 text-[#b3543e]" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done | failed
  const fieldRefs = useRef({})

  const setField = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      const msg = VALIDATORS[key](value)
      setErrors((prev) => ({ ...prev, [key]: msg }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    const nextErrors = {}
    for (const key of Object.keys(VALIDATORS)) {
      const msg = VALIDATORS[key](values[key])
      if (msg) nextErrors[key] = msg
    }
    setErrors(nextErrors)

    const firstErrorKey = Object.keys(VALIDATORS).find((k) => nextErrors[k])
    if (firstErrorKey) {
      const el = fieldRefs.current[firstErrorKey]
      el?.focus()
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    if (values.company_url) return // honeypot: bot入力なら静かに無視

    setStatus('sending')
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        // text/plain にするとプリフライトが発生せず、GASでCORSエラーになりません
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify({
          name: values.name.trim(),
          kana: values.kana.trim(),
          tel: values.tel.trim(),
          email: values.email.trim(),
          type: values.type,
          facility: values.facility,
          message: values.message.trim(),
          page: window.location.href,
        }),
      })
      const json = await res.json()
      if (!json?.ok) throw new Error('server')
      setStatus('done')
    } catch {
      setStatus('failed')
    }
  }

  const register = (key) => ({
    ref: (el) => (fieldRefs.current[key] = el),
    value: values[key],
    onChange: (e) => setField(key, e.target.value),
    'aria-invalid': Boolean(errors[key]),
  })

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-10 text-center md:mb-14">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#b29a6d]">
          Contact
        </p>
        <h1 className="font-serif text-3xl font-medium leading-relaxed text-[#2f332f] md:text-4xl">
          総合お問い合わせ・見学お申し込み
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-left text-sm leading-8 text-[#6f6a5c] md:text-center">
          Totono Labグループの各施設への見学・お問い合わせは、こちらのフォームより承っております。
          必要事項をご記入の上、送信してください。担当者より折り返しご連絡いたします。
        </p>
      </div>

      <div className="rounded-[2rem] border border-[#e8e2d5] bg-white px-6 py-10 md:px-12 md:py-14">
        {status === 'done' ? (
          <div className="py-6 text-center" role="status">
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#f1ead9]">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 stroke-[#b29a6d]"
                fill="none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-medium text-[#2f332f]">
              送信が完了しました
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#6f6a5c]">
              お問い合わせいただきありがとうございます。
              <br />
              担当者より折り返しご連絡いたしますので、今しばらくお待ちください。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-7">
            <Field label="お名前" error={errors.name}>
              <input
                type="text"
                autoComplete="name"
                placeholder="整野 凪"
                className={inputClass(errors.name)}
                {...register('name')}
              />
            </Field>

            <Field label="フリガナ" error={errors.kana}>
              <input
                type="text"
                autoComplete="off"
                placeholder="トトノ ナギ"
                className={inputClass(errors.kana)}
                {...register('kana')}
              />
            </Field>

            <Field label="電話番号" error={errors.tel}>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="054-000-0000"
                className={inputClass(errors.tel)}
                {...register('tel')}
              />
            </Field>

            <Field label="メールアドレス" error={errors.email}>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="example@totonolab.jp"
                className={inputClass(errors.email)}
                {...register('email')}
              />
            </Field>

            <Field label="お問い合わせ種別" error={errors.type}>
              <div className="relative">
                <select
                  className={`${inputClass(errors.type)} appearance-none pr-10 ${
                    values.type ? '' : 'text-[#b9b2a2]'
                  }`}
                  {...register('type')}
                >
                  <option value="">選択してください</option>
                  {TYPE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-2/3 rotate-45 border-b-2 border-r-2 border-[#b29a6d]" />
              </div>
            </Field>

            <Field label="希望施設" error={errors.facility}>
              <div className="relative">
                <select
                  className={`${inputClass(errors.facility)} appearance-none pr-10 ${
                    values.facility ? '' : 'text-[#b9b2a2]'
                  }`}
                  {...register('facility')}
                >
                  <option value="">選択してください</option>
                  {FACILITY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-2/3 rotate-45 border-b-2 border-r-2 border-[#b29a6d]" />
              </div>
            </Field>

            <Field
              label="お問い合わせ内容"
              error={errors.message}
              hint="見学ご希望の場合は、候補日時もあわせてご記入いただけるとスムーズです。"
            >
              <textarea
                rows={6}
                placeholder="ご質問・ご希望をご記入ください"
                className={`${inputClass(errors.message)} min-h-[10rem] resize-y leading-7`}
                {...register('message')}
              />
            </Field>

            <div>
              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#e8e2d5] bg-[#faf7f0] px-4 py-4 text-sm leading-7 text-[#2f332f]">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 flex-none cursor-pointer accent-[#b29a6d]"
                  ref={(el) => (fieldRefs.current.consent = el)}
                  checked={values.consent}
                  onChange={(e) => setField('consent', e.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                />
                <span>個人情報の取り扱いに同意の上、送信します。</span>
              </label>
              {errors.consent && (
                <p className="mt-2 text-xs leading-6 text-[#b3543e]" role="alert">
                  {errors.consent}
                </p>
              )}
            </div>

            {/* honeypot: 人間には見えない */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-px w-px opacity-0"
              value={values.company_url}
              onChange={(e) => setField('company_url', e.target.value)}
            />

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-full bg-[#2f332f] px-8 py-4 text-sm font-medium tracking-widest text-white transition hover:bg-[#b29a6d] disabled:cursor-wait disabled:opacity-50 sm:w-auto sm:min-w-[16rem]"
              >
                {status === 'sending' ? '送信中…' : '送信する'}
              </button>
              {status === 'failed' && (
                <p className="mt-4 text-xs leading-6 text-[#b3543e]" role="alert">
                  送信に失敗しました。お手数ですが、時間をおいて再度お試しください。
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
