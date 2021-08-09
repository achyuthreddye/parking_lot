import { MikroORM } from "@mikro-orm/core"

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "everest_parking_v1",
    host: "database-1.cfuhjvgitkg3.ap-south-1.rds.amazonaws.com",
    user: "postgres",
    password: "settlin987",
    debug: true, // can be kept as a flag in the
  })
}
main()
