import Barchart from "../../components/Barchart";
import Piechart from "../../components/Piechart";
import StatsDisplay from "../../components/StatsDisplay";

export default function Dashboard() {

    return <>
        <h1 className="text-2xl font-semibold text-gray-900">Admin Dash</h1>
        <div className="w-full lg:w-full pr-0 lg:pr-2 pb-10 grid justify-items-center">
            <div className="p-6 bg-white">
                <StatsDisplay/>
            </div>
        </div>

        <div className="w-full overflow-x-hidden flex">
            <main className="w-full flex-grow p-6">
                <div className="flex flex-wrap mt-6">


                    <div className="w-full lg:w-3/4 pr-0 lg:pr-2">
                        {/*<p className="text-xl pb-3 flex items-center">*/}
                        {/*    Bar Chart*/}
                        {/*</p>*/}
                        <div className="p-6 bg-white">
                            <Barchart/>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/4 pl-0 lg:pl-2 mt-12 lg:mt-0 ">
                        {/*<p className="text-xl pb-3 flex items-center">*/}
                        {/*    Pie Chart*/}
                        {/*</p>*/}
                        <div className="p-6 bg-white">
                            <Piechart/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
}