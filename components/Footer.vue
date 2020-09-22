<template>
  <div>
    <footer class="container bg-light footer">
      <div class="row">
        <div class="col">
          <section>
            <h5>Информация</h5>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link"><nuxt-link to="/about">
                  О магазине
                </nuxt-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><nuxt-link to="/catalog">
                  Католог
                </nuxt-link>
                </a>
              </li>
              <li class="nav-item">
                <a href="/contacts" class="nav-link"><nuxt-link to="/contacts">
                  Контакты
                </nuxt-link>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div class="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div class="footer-pay">
              <div class="footer-pay-systems footer-pay-systems-paypal" />
              <div class="footer-pay-systems footer-pay-systems-master-card" />
              <div class="footer-pay-systems footer-pay-systems-visa" />
              <div class="footer-pay-systems footer-pay-systems-yandex" />
              <div class="footer-pay-systems footer-pay-systems-webmoney" />
              <div class="footer-pay-systems footer-pay-systems-qiwi" />
            </div>
          </section>
          <section>
            <div class="footer-copyright">
              2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
              аксессуаров.
              Все права защищены.<br>Доставка по всей России!
            </div>
          </section>
        </div>
        <div class="col text-right">
          <section class="footer-contacts">
            <h5>Контакты:</h5>
            <a class="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
            <span class="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
            <a class="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
            <div class="footer-social-links">
              <div class="footer-social-link footer-social-link-twitter" />
              <div class="footer-social-link footer-social-link-vk" />
            </div>
          </section>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style>
/* Footer */
.footer {
  padding: 0 25px;
}

.footer-pay {
  display: flex;
  justify-content: space-between;
  margin: 12px auto 0;
}
.footer-pay-systems {
  width: 46px;
  height: 28px;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
  background-color: #FFFFFF;
  background-repeat: no-repeat;
}
.footer-pay-systems:not(:first-child) {
  margin-left: 5px;
}
.footer-pay-systems-paypal {
  background-position: -2px -6px;
}
.footer-pay-systems-master-card {
  background-position: -54px -8px;
}
.footer-pay-systems-visa {
  background-position: -104px -8px;
}
.footer-pay-systems-yandex {
  background-position: -154px -8px;
}
.footer-pay-systems-webmoney {
  background-position: -2px -46px;
}
.footer-pay-systems-qiwi {
  background-position: -52px -46px;
}

.footer-social-links {
  margin-top: 10px;
}
.footer-social-link {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 0 5px;
  border-radius: 50%;
  background-repeat: no-repeat;
}
.footer-social-link-twitter {
  background-position: -107px -42px;
}
.footer-social-link-vk {
  background-position: -157px -42px;
}
.footer-social-link:hover {
  cursor: pointer;
}

.footer-copyright {
  font-size: 0.8em;
}

.footer-contacts-phone {
  display: block;
}

.footer-contacts-email {
  display: block;
}
</style>
