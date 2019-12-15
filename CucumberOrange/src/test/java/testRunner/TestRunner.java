package testRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
	
@RunWith(Cucumber.class)

@CucumberOptions(
 features = "Feature",
 glue={"stepDescription"},
 plugin= 
	{
		"pretty","html:test-output",
		"json:jsonReport/jsonreport.json"
 
	},
 monochrome=true
 
 )
 

public class TestRunner {
	
	
	 

}
