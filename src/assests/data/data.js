import mustard from '../images/1.jpg'
let data = {
  faq: [
    {
      title: "1.	What is AllCanFarm?",
      message:
        "AllCanFarm is a platform for farmers and angel farmers to build a collaborative relationship and contribute to sustainable agriculture and a responsible environment",
    },
    {
      title: "2.	What is Dhur Maati?",
      message:
        "Dhur Maati is a marketplace for all the produce from AllCanFarm. It is a vertical of AllCanFarm, which allows the angel farmer to list the crops and fruits produced on the adopted farm to reach urban homes",
    },
    {
      title: "3.	Who is a farmer?",
      message:
        "A farmer typically works on farms or agricultural land, using various techniques and tools to cultivate the land, plant crops, and care for livestock. The role of a farmer is crucial in ensuring the availability of food and other agricultural products for human consumption and the economy.",
    },
    {
      title: "4.	Who is an angel farmer?",
      message:
        "An educated urban individual who adopts a farm and collaborates with conventional farmers to create conventional produce is known as an angel farmer. An angel farmer benefits from having access to farm-fresh products while also supporting the farmer. Additionally, an angel farmer might work with the farmer on a particular crop or produce.",
    },
    {
      title: "5.	What social interactions happen on AllCanFarm?",
      message: (
        <ul className="list-unstyled">
          <li className="benefits_list">
            Collaboration between farmers and angel farmers.
          </li>
          <li className="benefits_list">
            A networking platform among farmers.
          </li>
          <li className="benefits_list">
            Engagement with the customers of our marketplace.
          </li>
          <li className="benefits_list">
            Feedbacks and reviews from farmers, angel farmers and customers.
          </li>
          <li className="benefits_list">
            Community involvement for CSR initiatives.
          </li>
        </ul>
      ),
    },
    {
      title: "6.	What are the USPs of Dhur Maati?",
      message:
        "Dhur Maati is a marketplace devoid of any intermediaries that delivers farm-fresh produce to urban tables. Raw food grains undergo a series of rigorous tests at the collection centres and undergo processing through organic methods. Packaging made of certified materials is used to keep the products fresh without preservatives. Transportation happens twice a day at the scheduled time. Dhur Maati serves health and nutrition to your near and dear ones.",
    },
    {
      title: "7.	What angel farmers get by adopting a farm?",
      message: (
        <ul className="list-unstyled">
          <li className="benefits_list">
            Connect and collaborate with traditional farmers and work towards a
            sustainable farming. It supports farmers.
          </li>
          <li className="benefits_list">
            Stay in farmstead with family, which is equipped with Wi-Fi and
            modern technologies and facilities.
          </li>
          <li className="benefits_list">Access to farm-fresh produce.</li>
          <li className="benefits_list">
            Collect carbon credits and plan for the year by sponsoring new
            plantations.
          </li>
          <li className="benefits_list">Contribute in green economy.</li>
          <li className="benefits_list">Work from farm option available.</li>
        </ul>
      ),
    },
    {
      title: "8.	What farmers gets by joining AllCanFarm?",
      message:
        "Farmers will have opportunities to learn and implement new methods of sustainable farming and receive expert guidance on crop yield and quality from the expert team at AllCanFarm. When an angel farmer adopts a farm, the farmer can have additional income and a better marketplace for produce. Farmers can interact and have a social network with other farmers and angel farmers on the platform.",
    },
    {
      title: "9.	Why corporates should join AllCanFarm?",
      message:
        "AllCanFarm can provide corporates with several benefits, including supporting sustainable farming, accessing fresh and local produce, potential cost savings, opportunities for corporate social responsibility, access to investment opportunities, and potentially diversifying their portfolios.",
    },
  ],
  product: [
    {
      img1: mustard,
      heading1: "COLD PRESSED MUSTARD OIL",
    }
  ],

  footerLinks: [
  {
    name: "ABOUT",
    url: "/about",
  },
  {
    name: "ALLCANFARM",
    url: "/allcanfarm",
  },
  {
    name: "MAATI",
    url: "/maati ",
  },

  {
    name: "CONTACT",
    url: "/contact",
  },
],

};
export default data;
