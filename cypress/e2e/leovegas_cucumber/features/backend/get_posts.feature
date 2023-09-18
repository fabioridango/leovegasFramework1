Feature: Get a post record
  
  Scenario: Get a posts resource successfully
    When I send a HTTP GET request to API endpoint "https://jsonplaceholder.typicode.com/posts/1"
    Then I get a "200" response codes
    And the posts resource has details:
    | userId | title                                                                      | body                                                                                                                                                               |
    | 1      | sunt aut facere repellat provident occaecati excepturi optio reprehenderit | quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto  |
  