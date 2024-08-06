function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputEl = document.querySelector('#inputs textarea');
   const restaurantEl = document.querySelector('#outputs #bestRestaurant p');
   const workersEl = document.querySelector('#outputs #workers p');
   function onClick() {
      const restaurants = JSON.parse(inputEl.value).reduce((acc, curr) => {
         const [restaurantName, workersData] = curr.split(' - ');
         const workers = workersData.split(', ').map((workersData) => {
            const [name, salary] = workersData.split(' ');
            return { name, salary: Number(salary) };
         });
         if (!acc.hasOwnProperty(restaurantName)) {
            acc[restaurantName] = {
               workers: []
            };
         }
         acc[restaurantName].workers.push(...workers);
         return acc;
      }, {});

      function getAvgSalary(restaurantData) {
         return (restaurantData.workers.reduce((acc, curr) => acc + curr.salary, 0) / restaurantData.workers.length);
      }

      const [bestRestaurantKey] = Object.keys(restaurants).sort(
         (a, b) => getAvgSalary(restaurants[b]) - getAvgSalary(restaurants[a]));

      const bestWorkers = restaurants[bestRestaurantKey].workers
         .slice()
         .sort((a, b) => b.salary - a.salary);

      const bestRestaurantElTextContent = `Name: ${bestRestaurantKey} Average Salary: ${getAvgSalary
         (restaurants[bestRestaurantKey]).toFixed(2)} Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;
         restaurantEl.textContent = bestRestaurantElTextContent;

      const workersElTextContent = bestWorkers
         .map((x) => `Name: ${x.name} With Salary: ${x.salary}`)
         .join(" ");
      workersEl.textContent = workersElTextContent;
   }
}
