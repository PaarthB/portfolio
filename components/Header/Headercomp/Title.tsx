import { motion } from "framer-motion"

const Title = (props: { rotate }) => {
    return (     
        <motion.div
            animate={props.rotate ? { opacity: 0 } : { opacity: 1 }}
            transition={{ opacity: { duration: 0 } }}
            className="flex justify-end"
        >
            <img src="/img/title-md-extra-bold-no-bg.png" alt="Paarth Bhasin" />
            {/* <div className="w-6 h-0.5 rounded bg-AAsecondary"></div> */}
        </motion.div>
    )
}

export default Title;

