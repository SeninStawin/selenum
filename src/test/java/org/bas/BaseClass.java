package org.bas;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver driver;

	public static void launchBrowser() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	public static void windowMaximize() {
		driver.manage().window().maximize();

	}

	public static void launchUrl(String Url) {
		driver.get(Url);

	}

	public static void passText(String txt, WebElement ele) {
		ele.sendKeys(txt);

	}

	public static void closeEntireBrowser() {
		driver.quit();

	}
	public static void clickbtn(WebElement els) {
		els.click();

	}
	
	public static String pageTittle() {
		
		String title = driver.getTitle();
		return title;
	
	}
	public static String pageUrl() {
		String Url = driver.getCurrentUrl();
		return Url;

	}
	
	

	public static void excelRead( int rowNum, int cellNum,String newData) throws IOException {

		File f = new File("excellocation.xlsx");

		FileInputStream fis = new FileInputStream(f);

		Workbook wb = new XSSFWorkbook(fis);

		Sheet mysheet = wb.getSheet("Data");

		for (int i = 0; i < mysheet.getPhysicalNumberOfRows(); i++) {

			Row r = mysheet.getRow(i);

			for (int j = 0; j < r.getPhysicalNumberOfCells(); j++) {

				Cell c = r.getCell(j);

				int cellType = c.getCellType();

				if (cellType == 1) {
					String Value = c.getStringCellValue();
					// System.out.println(Value);

				} else if (DateUtil.isCellDateFormatted(c)) {
					Date dd = c.getDateCellValue();

					SimpleDateFormat s = new SimpleDateFormat("dd-MMM-yy");
					String value = s.format(dd);
					// System.out.println(value);

				}

				else {
					double a = c.getNumericCellValue();
					long l = (long) a;
					String valueOf = String.valueOf(l);
					// System.out.println(valueOf);
				}

			}

		}
	}
	public static void screenShot(String imgName) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File image = ts.getScreenshotAs(OutputType.FILE);
		File f = new File("location+ imgName.png");
		FileUtils.copyFile(image, f);
	}

	public static Actions a;

	public static void moveTheCursor(WebElement targrtWebElement) {

		a = new Actions(driver);
		a.moveToElement(targrtWebElement).perform();

	}

	public static void drageDrop(WebElement dragWebElement, WebElement dropElement) {
		a = new Actions(driver);
		a.dragAndDrop(dragWebElement, dropElement).perform();

	}

	public static JavascriptExecutor js;
	private static int rowNum;

	public static void scrollThePage(WebElement tarWebEle) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments(0).scrollIntoView(true)", tarWebEle);

	}

	public static void scroll(WebElement element) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments(0).scrollIntoVie(false)", element);

	}

	

	public static void creatNewExcelFile( int rowNum, int cellNum, String newData) throws IOException {
		File f = new File("C:\\Users\\user\\eclipse-workspace\\MavenSampleProject\\Excel\\newExcels.xlsx");
		Workbook w = new XSSFWorkbook();
		Sheet newSheet = w.createSheet("Datas");
		Row newRow = newSheet.createRow(rowNum);
		Cell newCell = newRow.createCell(cellNum);
		newCell.setCellValue(newData);
		FileOutputStream fos = new FileOutputStream(f);
		w.write(fos);
	}
	public static void createCell(int rowNum, int cellNum, String newData) throws IOException {
		File f = new File("C:\\Users\\user\\eclipse-workspace\\MavenSampleProject\\Excel\\newExcels.xlsx");
		Workbook w = new XSSFWorkbook();
		Sheet s = w.createSheet("Datas");
		Row r = s.createRow(rowNum);
		Cell c = r.createCell(cellNum);
		c.setCellValue(newData);
		FileOutputStream fos = new FileOutputStream(f);
		w.write(fos);
	}
	
	public static void createRow( int rowNum, int cellNum, String newData) throws IOException {
		File f = new File("C:\\Users\\user\\eclipse-workspace\\MavenSampleProject\\Excel\\newExcels.xlsx");
		Workbook wb = new XSSFWorkbook();
		Sheet s = wb.createSheet("Datas");
		Row r = s.createRow(rowNum);
		Cell c = r.createCell(cellNum);
		c.setCellValue(newData);
		FileOutputStream fos = new FileOutputStream(f);
		wb.write(fos);
	}
	
	public static void updateDataToPareticularCell( int getTheRow, int getTheCell, String existingData,String writeNewData) throws IOException {
		File f = new File("C:\\Users\\user\\eclipse-workspace\\MavenSampleProject\\Excel\\newExcels.xlsx");
		Workbook wb = new XSSFWorkbook();
		Sheet s = wb.getSheet("Datas");
		Row r = s.getRow(getTheRow);
		Cell c = r.getCell(getTheCell);
		String str = c.getStringCellValue();
		if (str.equals(existingData)) {
			c.setCellValue(writeNewData);
		}
			
		
		FileOutputStream fos = new FileOutputStream(f);
		wb.write(fos);
}
}




