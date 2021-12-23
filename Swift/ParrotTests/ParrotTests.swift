import XCTest

class ParrotTests: XCTestCase {
    func testSpeedOfEuropeanParrot() {
        let parrot = EuropeanParrot()
        XCTAssertEqual(parrot.speed, 12.0)
    }
    
    func testSpeedOfAfricanParrot_with_one_coconut() {
        let parrot = try! AfricanParrot(numberOfCoconuts: 1)
        XCTAssertEqual(parrot.speed, 3.0)
    }
    
    func testSpeedOfAfricanParrot_with_two_coconuts() {
        let parrot = try! AfricanParrot(numberOfCoconuts: 2)
        XCTAssertEqual(parrot.speed, 0.0)
    }
    
    func testSpeedOfAfricanParrot_with_no_coconuts () {
        let parrot = try! AfricanParrot(numberOfCoconuts: 0)
        XCTAssertEqual(parrot.speed, 12.0)
    }

    func testSpeedOfAfricanParrot_with_5_coconuts() {
        let parrot = try! AfricanParrot(numberOfCoconuts: 5)
        XCTAssertEqual(parrot.speed, 0.0)
    }

    func testSpeedOfAfricanParrot_with_minus_5_coconuts() {
        XCTAssertThrowsError(try AfricanParrot(numberOfCoconuts: -5), "Negative coconuts should throw an error") { (errorThrown) in
            XCTAssertEqual(errorThrown as? RuntimeError, RuntimeError.negativeCoconuts)
        }
    }


    func testSpeedOfNorwegianBlueParrot_nailed() {
        let parrot = try! NorwegianBlueParrot(voltage: 0.0, isNailed: true)
        XCTAssertEqual(parrot.speed, 0.0)
    }
    
    func testSpeedOfNorwegianBlueParrot_not_nailed() {
        let parrot = try! NorwegianBlueParrot(voltage: 1.5, isNailed: false)
        XCTAssertEqual(parrot.speed, 18.0)
    }

    func testSpeedOfNorwegianBlueParrot_not_nailed_high_voltage() {
        let parrot = try! NorwegianBlueParrot(voltage: 4.0, isNailed: false)
        XCTAssertEqual(parrot.speed, 24.0)
    }

    func testSpeedOfNorwegianBlueParrot_not_nailed_super_high_voltage() {
        let parrot = try! NorwegianBlueParrot(voltage: 24.0, isNailed: false)
        XCTAssertEqual(parrot.speed, 24.0)
    }

    func testSpeedOfNorwegianBlueParrot_not_nailed_negativer_high_voltage() {
        XCTAssertThrowsError(try NorwegianBlueParrot(voltage: -24.0, isNailed: false), "Negative voltage should throw an error") { (errorThrown) in
            XCTAssertEqual(errorThrown as? RuntimeError, RuntimeError.negativeVoltage)
        }
    }
}
