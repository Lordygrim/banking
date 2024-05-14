import Headerbox from "@/components/ui/Headerbox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
    const loggedIn = { firstName: 'Michael'}
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <Headerbox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your finances and transactions efficiently"
                    />
                </header>

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </div>
        </section>
    )
}

export default Home