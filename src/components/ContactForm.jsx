const TELEGRAM_CHAT_ID = '-942161807'
const TELEGRAM_BOT_TOKEN = '6029267965:AAEdlli5w6a8651AoMRRDQqTbdzPJPS-Sko'

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: `
Имя: ${data.name} 🧑
Почта: ${data.email} 📧
Страна: ${data.country} 🌐
Комментарий: ${data.message} ✏

Дата отправки: ${new Date().toLocaleString()} 📅
        `,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Сообщение отправлено. Спасибо за обращение!')
        } else {
          alert('Ошибка отправки сообщения. Попробуйте позже.')
        }
      })
      .catch(() => {
        alert('Ошибка отправки сообщения. Попробуйте позже.')
      })
      .finally(() => form.reset())
  }

  return (
    <form action="#" id="form" className="form__body" onSubmit={handleSubmit}>
      <h2 className="form-title">Contact us for information on products and prices</h2>
      <div className="form__rows">
        <div className="form__row-first">
          <div className="form__item">
            <input
              type="text"
              id="formName"
              name="name"
              className="form__input _req"
              placeholder="Name*"
              required
            />
          </div>
          <div className="form__item">
            <input
              type="email"
              id="formEmail"
              name="email"
              className="form__input _req _email"
              placeholder="Email*"
              required
            />
          </div>
          <div className="form__item">
            <input
              type="text"
              id="formCountry"
              name="country"
              className="form__input _req"
              placeholder="Country"
            />
          </div>
        </div>
        <div className="form__row-second">
          <div className="form__item form-comment">
            <textarea
              id="formMessage"
              name="message"
              className="form__input"
              placeholder="Your message*"
            ></textarea>
          </div>
          <button type="submit" className="form__button">
            Send
          </button>
        </div>
      </div>
    </form>
  )
}
