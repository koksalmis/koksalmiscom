function HomePage() {
    return (
        <>
            <div className="site-container">
                <div className="space-y-3">
                    <h2 className="shine text-2xl leading-snug">
                        <b className="font-semibold">I'm Enes 👋</b><br/>
                        Software Engineer <a href="https://www.tompay.com.tr/"
                                             className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@Technology
                        of Money</a>
                    </h2>
                    <p className="shine text-xl leading-snug">
                        Interested in Microservices, Docker, Kubernetes,
                        Design Patterns, Payment Systems
                    </p>
                    <p className="shine text-xl leading-snug">In this blog, I will share my thoughts, projects and
                        interests</p>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-20" align="center">
                <img alt="GIF" src="https://github.com/abhisheknaiidu/abhisheknaiidu/blob/master/code.gif?raw=true"/>
            </div>
        </>
    )
}

export default HomePage
