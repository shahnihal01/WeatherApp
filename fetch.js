class Fetch {
    async getCurrent(input) {
      const myKey = "6ac67d3af2ebeafc49704a778a282de2";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
      );
      const data = await response.json();  
      console.log(data);  
      return data;
    }
  }