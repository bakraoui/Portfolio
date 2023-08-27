
import * as style from '../styles/footer.module.css'
export function Footer(params) {
    


    return (
        <div className={style.container}>
            <p>@Copyright { new Date().getFullYear()}</p>
        </div>
    )
}