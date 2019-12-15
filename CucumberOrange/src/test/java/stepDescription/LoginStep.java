package stepDescription;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	
	
	WebDriver driver;
	String url="https://opensource-demo.orangehrmlive.com/";
	@Given("^Login Screen Should be launch$")
	public void Login_Screen_Should_be_launch()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\rohranja\\eclipse-workspace\\CucumberOrangeHRM\\Driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(url);
		
	}
	@When("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_Enter_Username_and_password(String username,String password) {
	    
		/*for(Credential logindata:usercredential)
		{
			
		driver.findElement(By.id("txtUsername")).sendKeys(logindata.getUsername());
		driver.findElement(By.id("txtPassword")).sendKeys(logindata.getPassword());
		driver.findElement(By.name("Submit")).click();
		}*/
		
		driver.findElement(By.id("txtUsername")).sendKeys(username);
		driver.findElement(By.id("txtPassword")).sendKeys(password);
		driver.findElement(By.name("Submit")).click();
		
	}
	/*
	@And("^User Enter Password$")
	public void user_Enter_Password() {
		driver.findElement(By.id("txtPassword")).sendKeys("admin123");
	}
	*/
	@Then("^OrangeHRM Home Screen Should Be Launched$")
	public void orangehrm_Home_Screen_Should_Be_Launched() {
		
		boolean data=driver.findElement(By.xpath("//*[text()='Welcome Admin']")).isDisplayed();

		Assert.assertEquals(data, true);

		
	 
	}
	
	
	

}
