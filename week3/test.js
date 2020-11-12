describe("pow", function() {
 // Описываем то, что будем тестировать
    it("возводит 2 в степень 3", function() {
      assert.equal(pow(2, 3), 8); // тут почти как в си
    });
    it("возводит  1 в степень 10", function() {
        assert.equal(pow(1,10), 1);
      });
  
  });