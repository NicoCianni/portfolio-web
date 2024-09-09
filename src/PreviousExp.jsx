import { motion } from "framer-motion"
import "./PreviousExp.css"

export function PreviousExp () {
    return (
        <section className="section-exp">
            <motion.div
            initial = {{y : 300, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration : 1.5}}
            className="alz-div">
                <h1>
                ALZ Mercados S.A (From Oct. 2020 to Actually)
                </h1>
                <div>
                    <h3>
                        Administrative Sr. at Cereal Brokerage
                    </h3>
                    <p>Meetings</p>
                    <p>Staff training</p>
                    <p>Multitasking</p>
                </div>
                <img src="../public/ALZ-Agro-logo.jpg"/>
            </motion.div>
            <motion.div 
            initial = {{y : 300, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration : 1.5}}
            className="coder-div">
                <h1>
                Coder House (From Jun. 2023 to Jan. 2024)
                </h1>
                <div>
                    <h3>
                        Front End Developer
                    </h3>
                    <p>Web Developer</p>
                    <p>JavaScript</p>
                    <p>React.js</p>
                </div>
                <img src="../public/coder-logo.jpeg"/>
            </motion.div>
            <motion.div
            initial = {{y : 300, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration : 1.5}}
            className="aricana-div">
                <h1>
                A.R.I.C.A.N.A (From Jun. 2023 to Jan. 2024)
                </h1>
                <div>
                    <h3>
                        School Scholarship
                    </h3>
                    <p>Meetings</p>
                    <p>Capacitations</p>
                    <p>Work hard</p>
                </div>
                <img src="../public/aricana-logo.jpeg"/>
            </motion.div>
        </section>
    )
}