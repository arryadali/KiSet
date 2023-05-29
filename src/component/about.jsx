import React from "react";

const About = () => {
    return(
        <section id="About">
            <div className="container">
                <div className="w-[83%] m-auto mt-[4rem] ">
                    <article className="text-[20px] font-medium text-justify">
                        KISET ( Kita Sehat ) adalah Aplikasi KiSet ( Kita Sehat ) adalah salah satu website yang digunakan untuk mengetahui solusi penyembuhan dari berbagai penyakit yang diderita seperti batuk, pilek maupun yang lainnya. KiSet menawarkan pengguna untuk mempermudah dan mempercepat akses setiap orang dalam mendapatkan informasi mengenai penyakit yang diderita beserta solusi alternatif yang benar dalam penangananya. Dengan adanya aplikasi KiSet tersebut diharapkan dapat memberi pertolongan terhadap orang-orang yang disebabkan berbagai hal tidak dapat berkonsultasi dengan dokter maupun ahli medis secara langsung dengan tanpa harus mengunjungi rumah sakit atau tempat praktek dokter tersebut berada.  
                    </article>
                </div>

                <div className="container">
                    <div className="w-[83%] m-auto mt-[8.3rem]">
                        <p className="text-[36px] font-bold text-center">
                            OUR TEAM !
                        </p>
                    </div>

                    <div className="flex gap-48 self-center justify-center mt-[46px]">
                        <section id="Arrya Dali Lesmana">
                            <div className="w-auto mt-4">
                                <img src="../asset/arrya.png" width={150} alt="Arrya Dali Lesmana" className="rounded-full m-auto"/>
                                <p className="text-[20px] font-medium mt-[18px]">
                                    Arrya Dali Lesmana
                                </p>

                                <div className="flex gap-5 justify-center">
                                    <a href="https://www.linkedin.com/in/arryadali/" target="_blank" rel="noreferrer">
                                        <img src="../asset/linkedin.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>

                                    <a href="https://www.instagram.com/arryadali/" target="_blank" rel="noreferrer">
                                        <img src="../asset/instagram.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>

                                    <a href="https://github.com/arryadali" target="_blank" rel="noreferrer">
                                        <img src="../asset/github.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section id="Gillya Sanjaya Putra">
                            <div className="w-auto">
                                <img src="../asset/gill.png" width={150} height={149} alt="Gillya Sanjaya Putra" className="rounded-full m-auto"/>
                                <p className="text-[20px] font-medium mt-[18px]">
                                    Gillya Sanjaya Putra
                                </p>

                                <div className="flex gap-5 justify-center">
                                    <a href="https://www.linkedin.com/in/gillya-sanjaya-putra-6ba935225" target="_blank" rel="noreferrer">
                                        <img src="../asset/linkedin.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>

                                    <a href="https://www.instagram.com/gillsnjya9_/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noreferrer">
                                        <img src="../asset/instagram.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>

                                    <a href="https://github.com/gillsanjaya9" target="_blank" rel="noreferrer">
                                        <img src="../asset/github.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section id="Cintia Marito Sihombing">
                            <div className="w-auto">
                                <img src="../asset/cintia.png" width={150} height={149} alt="Cintia Marito Sihombing" className="rounded-full m-auto"/>
                                <p className="text-[20px] font-medium mt-[18px]">
                                    Cintia Marito Sihombing
                                </p>

                                <div className="flex gap-5 justify-center">
                                    <a href="https://www.linkedin.com/in/cintia-marito-sihombing-b38551262/" target="_blank" rel="noreferrer">
                                        <img src="../asset/linkedin.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>

                                    <a href="https://www.instagram.com/cintia_sihombingg/" target="_blank" rel="noreferrer">
                                        <img src="../asset/instagram.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>

                                    <a href="https://www.instagram.com/cintia_sihombingg/" target="_blank" rel="noreferrer">
                                        <img src="../asset/github.png" alt="" width={45} height={45} className="rounded-full mt-[24px]"/>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;