import nodemailer from 'nodemailer'
const host = process.env.SMTP_HOST
const port = Number(process.env.SMTP_PORT || 587)
const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS
const fromEmail = process.env.FROM_EMAIL

export const transporter = nodemailer.createTransport({ host, port, secure: port===465, auth: { user, pass } })
export async function sendMail(to: string, subject: string, html: string) {
  if (!fromEmail || !to) throw new Error('Mail env missing')
  return transporter.sendMail({ from: fromEmail, to, subject, html })
}
