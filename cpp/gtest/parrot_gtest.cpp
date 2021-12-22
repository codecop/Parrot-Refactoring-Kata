#include <gtest/gtest.h>

using namespace std;

#include "Parrot.h"
#include "EuropeanParrot.h"
#include "AfricanParrot.h"
#include "NorwegianBlueParrot.h"


TEST(ParrotTest, NewSpeedOfEuropeanParrot) {
	auto* parrot = new EuropeanParrot();
	EXPECT_NEAR(12.0, parrot->getSpeed(), 0.0);
	delete parrot;
}


TEST(ParrotTest, NewSpeedOfAfricanParrot_With_One_Coconut) {
	auto* parrot = new AfricanParrot(1);
	EXPECT_NEAR(3.0, parrot->getSpeed(), 0.0);
	delete parrot;
}


TEST(ParrotTest, NewSpeedOfAfricanParrot_With_Two_Coconuts) {
	auto* parrot = new AfricanParrot(2);
	EXPECT_NEAR(0.0, parrot->getSpeed(), 0.0);
	delete parrot;
}

TEST(ParrotTest, NewSpeedOfAfricanParrot_With_No_Coconuts) {
	auto* parrot = new AfricanParrot(0);
	EXPECT_NEAR(12.0, parrot->getSpeed(), 0.0);
	delete parrot;
}
TEST(ParrotTest, NewSpeedNorwegianBlueParrot_nailed) {
	auto* parrot = new NorwegianBlueParrot(1.5, true);
	EXPECT_NEAR(0.0, parrot->getSpeed(), 0.0);
	delete parrot;
}


TEST(ParrotTest, NewSpeedNorwegianBlueParrot_not_nailed) {
	auto* parrot = new NorwegianBlueParrot(1.5, false);
	EXPECT_NEAR(18.0, parrot->getSpeed(), 0.0);
	delete parrot;
}


TEST(ParrotTest, NewSpeedNorwegianBlueParrot_not_nailed_high_voltage) {
	auto* parrot = new NorwegianBlueParrot(4, false);
	EXPECT_NEAR(24.0, parrot->getSpeed(), 0.0);
	delete parrot;
}