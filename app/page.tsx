import styles from './home.module.css'

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
}

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <section className={styles.blue}>
        <h1>Nice courves</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto dolorum reprehenderit illo illum eligendi mollitia odit accusantium recusandae tempora est inventore voluptate ex id, minima adipisci odio, itaque obcaecati?</p>
        <div className={styles.curve}></div>
      </section>
      <section>
        <h1>Nice courves</h1>
        <p>Voluptatem animi, maxime aliquam sed minus autem qui porro iusto expedita illo corrupti eum, suscipit eos temporibus quasi. Non quae eos repellat alias ducimus incidunt necessitatibus vitae accusantium saepe! Quidem?</p>
      </section>
      <section className={styles.bubble}>
        <h1>Nice courves</h1>
        <p>Quod incidunt porro, omnis a, eos dolores vero enim, ullam quaerat nemo sint aliquid quis! Voluptatem ipsa quisquam eligendi voluptate excepturi amet minus explicabo, molestias minima quas voluptas quo sunt?</p>
      </section>
      <section className={styles.dark}>
        <h1>Nice courves</h1>
        <p>Hic sint deserunt doloribus, accusamus quisquam aliquam maxime modi. Aliquam nemo molestiae facilis ipsam omnis magnam consectetur rem distinctio. Dignissimos eius cum accusamus at asperiores praesentium amet sed. Possimus, maiores!</p>
      </section>
      <section className={styles.red}>
        <h1>Nice courves</h1>
        <p>Debitis nostrum nulla dicta quis dolor, est, labore pariatur deleniti repellendus, dolores ducimus. Nesciunt illo similique explicabo! Nemo qui dignissimos iure autem accusantium ipsum odit fuga ipsa et perferendis? Temporibus.</p>
      </section>
      
      <section>
        <h1>Nice courves</h1>
        <p>Tenetur delectus quia placeat officiis enim, quasi eius ipsam magni amet optio dolorum, rerum esse sit quos repudiandae maiores odit veniam qui magnam, ea sequi fugiat! Accusamus impedit exercitationem repellendus.</p>
      </section>
      <section>
        <h1>Nice courves</h1>
        <p>Adipisci accusamus voluptatem tempore nemo eum totam perferendis earum distinctio, ratione hic consequuntur nostrum eius impedit. Nam aut nostrum, necessitatibus nisi neque facere accusantium quas molestias, excepturi iste natus est!</p>
      </section>
      <section>
        <h1>Nice courves</h1>
        <p>Tenetur reiciendis magnam illum labore rerum, officiis consequuntur facilis molestias accusamus, dolores enim consequatur asperiores magni nam optio, explicabo ullam modi error tempore? Corrupti molestiae facilis omnis incidunt doloribus error!</p>
      </section>
    </main>
  )
}
