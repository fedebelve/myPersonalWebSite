import { IconType } from "react-icons"
import { BiSolidFileCss } from "react-icons/bi"
import { FaPython, FaPhp, FaHtml5, FaDocker, FaReact } from "react-icons/fa"
import { PiFileSql } from "react-icons/pi"
import { SiJavascript } from "react-icons/si"

const TechMap: {[key: string]: IconType} = {
    python: FaPython,
    php: FaPhp,
    html: FaHtml5,
    css: BiSolidFileCss,
    sql: PiFileSql,
    docker: FaDocker,
    react: FaReact,
    javascript: SiJavascript
}

export default TechMap