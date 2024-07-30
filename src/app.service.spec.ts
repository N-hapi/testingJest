import { AppService } from "./app.service";
import { Test, TestingModule } from "@nestjs/testing";

describe("doing a test for app module", () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();
    service = module.get<AppService>(AppService);
  });
  it("should pass the test for service", () => {
    expect(service.getHello()).toBe("Hello World!");
  });
});

// Arrange, Act, Assert
