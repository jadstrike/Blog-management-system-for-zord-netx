import React, {useContext,useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../serivices';
import { motion } from 'framer-motion';
// const categories=[
//     {name:"React",slug:"react"},
//     {name:"Web Development", slug:'web-dev'}
// ]
const Header = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <motion.div initial="hidden" animate="visible" variants={{
                            hidden:{
                                scale: .8,
                                opacity: 0
                            },
                            visible:{
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .6
                                }
                            }
                        }}
                        
                        >
                        <span className="cursor-pointer font-bold font-mono text-4xl text-red-500">
                            ZORD NETX
                        </span>
                        </motion.div>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category)=>(
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Header
