import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "./app.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("some crap test", () => {
  let moduleApp: TestingModule;

  beforeEach(async () => {
    moduleApp = await Test.createTestingModule({
      providers: [AppModule],
    }).compile();
  });

  it("some crap", () => {
    expect(moduleApp.get<AppController>(AppController)).toBeDefined;
  });
  it("some crap 2", () => {
    expect(moduleApp.get<AppService>(AppService)).toBeDefined;
  });
});
