import MainLayout from "@components/Layouts/MainLayout";
import {notionDatabaseId, notionToken} from "@config";

export default function Projects({projects}) {
  return (
    <MainLayout>
      <h1>Projects page</h1>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const {Client} = require("@notionhq/client");

  const notion = new Client({auth: notionToken});
  const getAPI = async () => {
    const databaseId = notionDatabaseId;
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          timestamp: "created_time",
          direction: "ascending",
        },
      ],
    });
    console.log(response);
    return response;
  };

  const response = await getAPI();
  return {
    props: {projects: response},
  };
}
