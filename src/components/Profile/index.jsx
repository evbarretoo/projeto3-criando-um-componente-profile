import styles from './styles.module.css'
export default function Profile(props) {
    return(
        <div>
            <div >
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src={props.avatar} />
                    </div>
                    <div><h1 className={styles.h1}>{props.name}</h1></div>
                    <div><p className={styles.bio}>{props.bio}</p></div>
                    <div><p className={styles.phone}>{props.phone}</p></div>
                    <div><p className={styles.email}>{props.email}</p></div>
                    <div className={styles.buttons}>
                        <button className={styles.githubBtn} href={props.githubUrl}>GitHub</button><br></br>
                        <button className={styles.linkedinBtn} href={props.linkedinUrl}>LinkedIn</button><br></br>
                        <button className={styles.twitterBtn} href={props.twitterUrl}>Twitter</button><br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}