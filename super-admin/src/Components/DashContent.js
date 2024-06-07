import React from 'react'
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";

export default function DashContent({handleTotalLeads, handleDuesTable, handleCollection, handleExpireTable}) {
  return (
    <div>
        
        
          {/* <header className="flex items-center h-14 px-4 border-b border-gray-200 dark:border-gray-700">
            <button className="rounded-md" size="icon" variant="icon">
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <div className="ml-4 text-sm font-medium">Content</div>
            <div className="flex flex-1 justify-end gap-4 md:gap-2">
              <button size="icon" variant="ghost">
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </button>
              <button size="icon" variant="ghost">
                <BellIcon className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </button>
              <button size="icon" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">User</span>
              </button>
            </div>
          </header> */}
          <div className="flex-1 flex flex-col gap-4 p-4 md:gap-2/ mb-10">
            

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Monthly Leads And Onboarding
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Progress With Line Chart
                  </p>
                </div>
                <div className="p-6">
                  <CurvedlineChart className="w-full aspect-[3/2]" />
                </div>
              </div>

              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                    Monthly Leads And Onboarding
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Progress With Pie Chart
                  </p>
                </div>
                <div className="p-6">
                  <LabelledpieChart className="w-full aspect-[3/2]" />
                </div>
              </div>
              {/* <Card>
                <CardHeader>
                  <CardTitle>Card title</CardTitle>
                  <CardDescription>Card description</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <CurvedlineChart className="w-full aspect-[3/2]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card title</CardTitle>
                  <CardDescription>Card description</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <LabelledpieChart className="w-full aspect-[3/2]" />
                </CardContent>
              </Card> */}
            </div>
          </div>
        

    </div>
  )
}



function CurvedlineChart(props) {
    return (
      <div {...props}>
        <ResponsiveLine
          data={[
            {
              id: "Desktop",
              data: [
                { x: "Jan", y: 43 },
                { x: "Feb", y: 137 },
                { x: "Mar", y: 61 },
                { x: "Apr", y: 145 },
                { x: "May", y: 26 },
                { x: "Jun", y: 154 },
              ],
            },
            {
              id: "Mobile",
              data: [
                { x: "Jan", y: 60 },
                { x: "Feb", y: 48 },
                { x: "Mar", y: 177 },
                { x: "Apr", y: 78 },
                { x: "May", y: 96 },
                { x: "Jun", y: 204 },
              ],
            },
          ]}
          margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
          xScale={{
            type: "point",
          }}
          yScale={{
            type: "linear",
            min: 0,
            max: "auto",
          }}
          curve="monotoneX"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 16,
          }}
          axisLeft={{
            tickSize: 0,
            tickValues: 5,
            tickPadding: 16,
          }}
          colors={["#2563eb", "#e11d48"]}
          pointSize={6}
          useMesh={true}
          gridYValues={6}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "12px",
                textTransform: "capitalize",
                borderRadius: "6px",
              },
            },
            grid: {
              line: {
                stroke: "#f3f4f6",
              },
            },
          }}
          role="application"
        />
      </div>
    );
  }


  function LabelledpieChart(props) {
    return (
      <div {...props}>
        <ResponsivePie
          data={[
            { id: "Jan", value: 111 },
            { id: "Feb", value: 157 },
            { id: "Mar", value: 129 },
            { id: "Apr", value: 150 },
            { id: "May", value: 119 },
            { id: "Jun", value: 72 },
          ]}
          sortByValue
          margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={3}
          activeOuterRadiusOffset={2}
          borderWidth={1}
          arcaLabelsThickness={1}
          enableArcLabels={false}
          colors={["#2563eb"]}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "12px",
                textTransform: "capitalize",
                borderRadius: "6px",
              },
            },
          }}
          role="application"
        />
      </div>
    );
  }